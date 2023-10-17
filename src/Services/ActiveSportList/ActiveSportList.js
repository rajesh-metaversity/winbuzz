import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const ActiveSport = createApi({
    reducerPath: "activeSport",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        activeSport: builder.mutation({
            query: body => ({
				url: 'sport/active-sport-list',
				method: 'POST',
				body
			})

        })

    })
})

export const { useActiveSportMutation } = ActiveSport

