import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const BalanceApi = createApi({
  reducerPath: "BalanceApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    balanceApi: builder.mutation({
      query: (body) => ({
        url: "enduser/get-user-balance",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useBalanceApiMutation } = BalanceApi;
