import { apiSlice } from "../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (item) => ({
        url: "/cart/add",
        method: "POST",
        body: item,
      }),
    }),
  }),
});
