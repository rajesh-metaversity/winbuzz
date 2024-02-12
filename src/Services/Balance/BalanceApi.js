import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const BalanceApi = createApi({
  reducerPath: "BalanceApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    balanceApi: builder.query({
      query: (body) => ({
        url: "enduser/get-user-balance",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useBalanceApiQuery } = BalanceApi;
