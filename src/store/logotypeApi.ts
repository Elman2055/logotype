import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://logotype.webshop2.kz/api";

export const logotypeAPi = createApi({
  reducerPath: "logotypeApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/products",
    }),
    getProduct: builder.query({
      query: (id: number) => `/products/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = logotypeAPi;
