

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const BalanceApi = createApi({
  reducerPath: "BalanceApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    balance: builder.query({
      query: body => ({
        url: '/enduser/get-user-balance',
        method: 'POST',
        body
    })
    }),
  }),
});
export const { useBalanceQuery} = BalanceApi;