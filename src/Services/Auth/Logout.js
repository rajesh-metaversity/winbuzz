import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const Logout = createApi({
    reducerPath: "logout",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        Logout: builder.mutation({
            query: body => ({
				url: 'login/logout',
				method: 'POST',
				body
			})

        })

    })
})

export const {useLogoutMutation} = Logout