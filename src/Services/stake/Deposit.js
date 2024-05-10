//

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const stake = createApi({
  reducerPath: "stake",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    stake: builder.query({
      query: (body) => ({
        url: "enduser/get-stake-button",
        method: "POST",
        body,
      }),
    }),
    depositStake: builder.query({
      query: (body) => ({
        url: "request-stack",
        method: "POST",
        body,
      }),
    }),
    depositbalance: builder.query({
      query: (body) => ({
        url: "enduser/depsosit-request-client",
        method: "POST",
        body,
      }),
    }),

    depositBank: builder.query({
      query: (body) => ({
        url: "/deposit-type/get_sub",
        method: "POST",
        body,
      }),
    }),

    depositbalanceSubmit: builder.mutation({
      query: (body) => ({
        url: "/enduser/self-deposit-app",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useStakeQuery,
  useDepositStakeQuery,
  useDepositBankQuery,
  useDepositbalanceQuery,
  useDepositbalanceSubmitMutation,
} = stake;
