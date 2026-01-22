import { apiRoutes } from "../../../Routes/apiRoutes";
import { apiSlice } from "../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: apiRoutes.addToCart,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddToCartMutation } = cartApiSlice;
