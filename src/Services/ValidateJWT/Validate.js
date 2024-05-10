import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const ValidateJWT = createApi({
	reducerPath: 'validate',
	baseQuery: dynamicBaseQuery,
	endpoints: builder => ({
		ValidateJWT: builder.mutation({
			query: body => ({
				url: '/util/validate-jwt-token',
				method: 'POST',
				body
			})
		})
	})
});

export const {useValidateJWTMutation} = ValidateJWT