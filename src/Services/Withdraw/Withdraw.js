import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


export const Withdraw = createApi({
    reducerPath: 'qtech',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.247365.exchange/admin-new-apis',
        prepareHeaders: headers => {
            const token = localStorage.getItem('token');
            if (token) headers.set('Authorization', `Bearer ${token}`);
            return headers;
        }
    }),
    endpoints: builder => ({
        Withdraw: builder.query({
            query: args => ({
                url: 'withtype-subadmin/get',
                method: 'POST',
                body: args
            })
        }),
    })
})


export const { useWithdrawQuery } = Withdraw;