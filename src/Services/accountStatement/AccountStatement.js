import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dynamicBaseQuery } from '../BadRequestHandler/BadRequestHandler';

export const accountStatement = createApi({
	reducerPath: 'accountStatement',
	baseQuery: dynamicBaseQuery,
	endpoints: builder => ({
		accountStatement: builder.mutation({
			query: body => ({
				url: 'enduser/account-statement',
				method: 'POST',
				body
			})
		})
	})
});

export const { useAccountStatementMutation } = accountStatement;
