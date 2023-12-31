import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const BettingProfitLoss = createApi({
    reducerPath: "bettingProfitLoss",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        BettingProfitLoss: builder.mutation({
            query: body => ({
                url: 'report/profit-loss-match-wise',
                method: 'POST',
                body
            })
        }),
        BetListByMatch: builder.query({
            query: (args) => ({
                url: 'enduser/bet-list-by-matchid',
                method: 'POST',
                body: args
            })
        })

    })

})

export const { useBetListByMatchQuery, useBettingProfitLossMutation } = BettingProfitLoss