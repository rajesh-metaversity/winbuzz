import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const ChangePassword = createApi({
	reducerPath: 'changepasswordteo',
	baseQuery: dynamicBaseQuery,
	endpoints: builder => ({
		ChangePassword: builder.mutation({
			query: body => ({
				url: '/enduser/change-password',
				method: 'POST',
				body
			})
		})
	})
});

export const {useChangePasswordMutation} = ChangePassword