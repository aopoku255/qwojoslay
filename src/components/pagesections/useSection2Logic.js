import { useEffect } from "react";
import { useGetAllProductsQuery } from "../../app/features/products/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProducts,
} from "../../app/features/products/productSlice";

export function useSection2Logic() {
  const dispatch = useDispatch();
  const {
    data: getAllProducts,
    isSuccess,
    isLoading,
  } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess && getAllProducts) {
      dispatch(setProducts(getAllProducts)); // 👈 NO spread
    }
  }, [dispatch, getAllProducts, isSuccess]);

  const products = useSelector(selectProducts);

  console.log(products);

  return { products, isLoading };
}
