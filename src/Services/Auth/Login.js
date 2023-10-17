import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const Login = createApi({
    reducerPath: "login",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
				url: 'login/client-login',
				method: 'POST',
				body
			})

        })

    })
})

export const {useLoginMutation} = Login