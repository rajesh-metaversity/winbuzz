// import { dynamicBaseQuery } from '../BadRequestHandler/BadRequestHandler';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const Qtech = createApi({
	reducerPath: 'qtech',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.247idhub.com/api/qtech',
		prepareHeaders: headers => {
			const token = localStorage.getItem('token');
			if (token) headers.set('Authorization', `Bearer ${token}`);
			return headers;
		}
	}),
	endpoints: builder => ({
		Qtech: builder.mutation({
			query: args => ({
				url: '/gamelist',
				method: 'POST',
				body: args
			})
		}),
		QtechAuth: builder.query({
			query: args => ({
				url: '/authentication',
				method: 'POST',
				body: args
			})
		})
	})
});

export const { useQtechMutation, useQtechAuthQuery } = Qtech;