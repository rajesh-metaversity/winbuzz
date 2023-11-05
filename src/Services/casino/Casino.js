import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const Casino = createApi({
  reducerPath: "bannerList",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    casinoRules: builder.mutation({
      query: () => ({
        url: '/api/getOneUserBetResult',
        method: 'POST',
        body:{
            appUr:window.location.hostname
        }
    })
    }),
  }),
});
export const {useCasinoRulesMutation} = Casino;
