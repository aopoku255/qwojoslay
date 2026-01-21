import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailsQuery } from "../../app/features/products/productsApiSlice";
import {
  selectProductDetails,
  setProductDetails,
} from "../../app/features/products/productSlice";

export function useProductDetailsLogic(slug, fallbackStateProduct = null) {
  const dispatch = useDispatch();

  const {
    data: productDetails,
    error,
    isLoading,
  } = useGetProductDetailsQuery(slug, {
    skip: !slug,
  });

  // Store in redux (your existing pattern)
  useEffect(() => {
    if (productDetails) dispatch(setProductDetails(productDetails));
  }, [dispatch, productDetails]);

  // Prefer redux value, fallback to API result, then to route state product
  const reduxProduct = useSelector(selectProductDetails);
  const productDetail = reduxProduct ?? productDetails ?? fallbackStateProduct;

  // ------- Derived data -------
  const images = useMemo(() => {
    const apiImgs = productDetail?.images
      ?.map((img) => img?.url)
      .filter(Boolean);
    if (apiImgs?.length) return apiImgs;

    const stateImgs = fallbackStateProduct?.images
      ?.map((img) => img?.url)
      .filter(Boolean);
    if (stateImgs?.length) return stateImgs;

    return [];
  }, [productDetail, fallbackStateProduct]);

  const variants = useMemo(
    () => productDetail?.variants ?? [],
    [productDetail],
  );

  // ------- Selection state -------
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Auto-select first image/color/size when product loads/changes
  useEffect(() => {
    if (!productDetail) return;

    // image
    const firstImg = images?.[0] ?? "";
    setSelectedImage(firstImg);

    // color + size
    const firstVariant = variants?.[0];
    const firstColor = firstVariant?.color ?? "";
    setSelectedColor(firstColor);

    const firstSize =
      firstVariant?.size
        ?.split(",")
        .map((s) => s.trim())
        .filter(Boolean)?.[0] ?? "";

    setSelectedSize(firstSize);
  }, [productDetail, images, variants]);

  // Find selected variant (by color)
  const selectedVariant = useMemo(() => {
    if (!variants?.length) return null;
    return variants.find((v) => v?.color === selectedColor) ?? variants[0];
  }, [variants, selectedColor]);

  // Sizes for the selected variant only
  const availableSizes = useMemo(() => {
    const s = selectedVariant?.size ?? "";
    return s
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }, [selectedVariant]);

  // If user changes color, auto-pick the first size of that color
  useEffect(() => {
    if (!selectedVariant) return;
    const nextSize = availableSizes?.[0] ?? "";
    setSelectedSize(nextSize);
  }, [selectedVariant]); // intentionally not depending on availableSizes to avoid extra loops

  // ------- Handlers -------
  const selectImage = (url) => setSelectedImage(url);
  const selectColor = (color) => setSelectedColor(color);
  const selectSize = (size) => setSelectedSize(size);

  const handleAddToCart = () => {
    // Implement add to cart logic here
    console.log("Add to cart:", {
      productId: productDetail.id,
      variantId: selectedVariant?.id,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return {
    productDetail,
    error,
    isLoading,

    images,
    variants,

    selectedImage,
    selectedColor,
    selectedSize,
    selectedVariant,
    availableSizes,

    selectImage,
    selectColor,
    selectSize,
    handleAddToCart,
  };
}
