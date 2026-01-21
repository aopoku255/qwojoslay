import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.data;
    },
    setProductDetails(state, action) {
      state.productDetails = action.payload.product;
    },
  },
});

export const { setProducts, setProductDetails } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectProductDetails = (state) => state.products.productDetails;

export default productSlice.reducer;
