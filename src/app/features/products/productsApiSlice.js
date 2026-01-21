import { apiRoutes } from "../../../Routes/apiRoutes";
import { apiSlice } from "../api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: apiRoutes.getAllProducts,
        method: "GET",
      }),
    }),

    getProductDetails: builder.query({
      query: (id) => ({
        url: `${apiRoutes.getAllProducts}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
