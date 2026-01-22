import React from "react";
import Layout1 from "../../layout/Layout1";
import { useLocation, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { currency } from "../../lib";
import { useProductDetailsLogic } from "./useProductDetailsLogic";

const ProductDetails = () => {
  const { state } = useLocation();
  const { slug } = useParams();

  const {
    productDetail,
    error,
    isLoading,

    images,
    variants,

    selectedImage,
    selectedColor,
    selectedSize,
    availableSizes,

    selectImage,
    selectColor,
    selectSize,
    handleAddToCart,
    data,
  } = useProductDetailsLogic(slug, state);

  if (isLoading) {
    return (
      <Layout1>
        <div className="py-16">Loading...</div>
      </Layout1>
    );
  }

  if (error) {
    return (
      <Layout1>
        <div className="py-16 text-red-600">
          Failed to load product details.
        </div>
      </Layout1>
    );
  }

  if (!productDetail) {
    return (
      <Layout1>
        <div className="py-16">Product not found.</div>
      </Layout1>
    );
  }

  return (
    <Layout1>
      <div className="sm:grid sm:grid-cols-2 sm:items-center py-16 gap-x-12 grid gap-y-8">
        {/* LEFT: IMAGE GALLERY */}
        <div className="flex flex-col gap-y-4">
          {/* Main Image */}
          <div className="rounded-md overflow-hidden">
            <img
              src={selectedImage || productDetail?.images?.[0]?.url}
              alt={productDetail?.name || "Product"}
              className="w-full h-105 object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-x-3 mt-8">
            {images.map((url, index) => (
              <button
                key={`${url}-${index}`}
                onClick={() => selectImage(url)}
                className={`border cursor-pointer rounded-sm overflow-hidden 
                  ${selectedImage === url ? "border-brand-red" : "border-gray-300"}`}
              >
                <img
                  src={url}
                  alt=""
                  className="w-20 h-20 object-cover hover:opacity-80"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-col gap-y-4 items-start">
          <h3 className="text-3xl text-black/80 font-bold">
            {productDetail?.name}
          </h3>

          <p className="flex gap-x-2">
            <span className="font-semibold text-gray-600">CATEGORY:</span>
            <span className="text-gray-600">
              {productDetail?.category?.name || "Uncategorized"}
            </span>
          </p>

          <div className="flex gap-x-2 items-center">
            <p className="text-gray-600">Rated:</p>
            <Rating value={3.7} readOnly sx={{ fontSize: 20 }} />
            <p className="font-semibold text-gray-600 text-sm">(70)</p>
          </div>

          {/* Colors */}
          <h4 className="font-semibold">Options</h4>
          <div className="flex gap-x-2 flex-wrap">
            {variants.map((variant) => (
              <label key={variant.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="colors"
                  className="peer hidden"
                  checked={selectedColor === variant.color}
                  onChange={() => selectColor(variant.color)}
                />
                <span
                  className="px-5 py-1.5 text-sm rounded-sm block bg-gray-200 
                  peer-checked:bg-brand-red peer-checked:text-white"
                >
                  {variant?.color}
                </span>
              </label>
            ))}
          </div>

          {/* Sizes (based on selected color) */}
          <h4 className="font-semibold">Sizes</h4>
          <div className="flex gap-x-2 flex-wrap">
            {availableSizes.map((size) => (
              <label
                key={`${selectedColor}-${size}`}
                className="cursor-pointer"
              >
                <input
                  type="radio"
                  name="sizes"
                  value={size}
                  className="peer hidden"
                  checked={selectedSize === size}
                  onChange={() => selectSize(size)}
                />
                <span
                  className="px-5 py-1.5 text-sm rounded-sm block bg-gray-200
                  peer-checked:bg-brand-red peer-checked:text-white"
                >
                  {size}
                </span>
              </label>
            ))}
          </div>

          <h2 className="font-bold text-3xl text-brand-red">
            {currency(productDetail?.price || 0)}
          </h2>

          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Stock Available:</span>{" "}
            {productDetail?.stock || 0}
          </p>

          <button
            className="bg-brand-red text-white px-6 py-2.5 rounded-sm text-sm font-semibold"
            onClick={(e) => handleAddToCart(e, data)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Layout1>
  );
};

export default ProductDetails;
