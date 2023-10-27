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
                url: '/withtype-subadmin/get',
                method: 'POST',
                body: args
            })
        }),
        WithdrawStake: builder.query({
            query: args => ({
                url: "/request-stack",
                method: 'POST',
                body: args
            })
        }),
        WithdrawClientList: builder.query({
            query: args => ({
                url: "/enduser/withdraw-request-client",
                method: 'POST',
                body: args
            })
        }),
        BankAccount: builder.query({
            query: args => ({
                url: "/get/client-bank",
                method: 'POST',
                body: args
            })
        }),
        withdrawBalance: builder.mutation({
            query: args => ({
                url: "/self-withdraw-app",
                method: 'POST',
                body: args
            })
        }),
    })
})


export const { useWithdrawQuery, useWithdrawStakeQuery, useWithdrawClientListQuery, useBankAccountQuery, useWithdrawBalanceMutation } = Withdraw;