import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const UnsettledBets = createApi({
    reducerPath: "unsettledBets",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        UnsettledBets: builder.mutation({
            query: body => ({
				url: '/enduser/unsettled-bet',
				method: 'POST',
				body
			})

        }),
        placeBets: builder.mutation({
            query: body => ({
				url: '/enduser/place-bets',
				method: 'POST',
				body
			})

        }),

    })
})

export const {useUnsettledBetsMutation, usePlaceBetsMutation} = UnsettledBets