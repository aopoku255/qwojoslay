import { apiSlice } from "../api/apiSlice";

export const homeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    home: builder.query({
      query: () => ({
        url: "/home",
        method: "GET",
      }),
    }),
  }),
});

export const { useHomeQuery } = homeApiSlice;
