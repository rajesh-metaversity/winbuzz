import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const PnlApi = createApi({
    reducerPath: "PnlApi",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        oddsPnl: builder.query({
            query: body => ({
				url: '/enduser/user-odds-pnl',
				method: 'POST',
				body
			})

        }),
        fancyPnl: builder.query({
            query: body => ({
				url: '/enduser/user-fancy-pnl',
				method: 'POST',
				body
			})

        }),

    })
})

export const {useOddsPnlQuery, useFancyPnlQuery} = PnlApi