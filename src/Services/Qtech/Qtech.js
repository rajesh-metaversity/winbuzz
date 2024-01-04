// import { dynamicBaseQuery } from '../BadRequestHandler/BadRequestHandler';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const Qtech = createApi({
  reducerPath: "qtechApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.247idhub.com/api/qtech",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    Qtech: builder.mutation({
      query: (args) => ({
        url: "/gamelist",
        method: "POST",
        body: args,
      }),
    }),
    provider: builder.mutation({
      query: (args) => ({
        url: "/provider",
        method: "POST",
        body: args,
      }),
    }),
    QtechAuth: builder.query({
      query: () => ({
        url: "/authentication",
        method: "POST",
        // body: args,
      }),
    }),
    casinoIframe: builder.mutation({
      query: (body) => ({
        url: "/gamelink",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useQtechMutation,
  useProviderMutation,
  useQtechAuthQuery,
  useCasinoIframeMutation,
} = Qtech;
