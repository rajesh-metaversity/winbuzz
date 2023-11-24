import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { dynamicBaseQuery } from '../BadRequestHandler/BadRequestHandler';

export const accountStatement = createApi({
	reducerPath: 'accountStatement',
	baseQuery: dynamicBaseQuery,
	endpoints: builder => ({
		getStake: builder.mutation({
			query: body => ({
				url: 'enduser/set-stake-button',
				method: 'POST',
				body
			})
        }),
        setStake: builder.mutation({
			query: body => ({
				url: 'enduser/set-stake-button',
				method: 'POST',
				body
			})
        })
        
        
	})
});

export const { useGetStakeMutation, useSetStakeMutation } = accountStatement;
