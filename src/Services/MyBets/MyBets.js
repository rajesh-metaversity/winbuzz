import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const MyBets = createApi({
    reducerPath: "myBets",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        MyBets: builder.mutation({
            query: body => ({
				url: 'enduser/unsettled-bet',
				method: 'POST',
				body
			})

        })

    })
})

export const {useMyBetsMutation} = MyBets