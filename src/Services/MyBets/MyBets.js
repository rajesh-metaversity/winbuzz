import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/query/react';

export const MyBets = createApi({
	reducerPath: 'myBetsw',
	baseQuery: dynamicBaseQuery,
	endpoints: builder => ({
		MyBets: builder.mutation({
			query: body => ({
				url: '/report/current-bets',
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
		})
	})
});

export const { useMyBetsMutation, usePlaceBetsMutation } = MyBets;