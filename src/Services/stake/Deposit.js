//

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const stake = createApi({
  reducerPath: "stake",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    stake: builder.query({
      query: (body) => ({
        url: "/request-stack",
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
  }),
});
export const { useStakeQuery, useDepositBankQuery } = stake;
