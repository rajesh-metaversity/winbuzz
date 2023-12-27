import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";

export const supernowaApi = createApi(
    {
        reducerPath: 'supernowaapi',
        baseQuery: dynamicBaseQuery,
        endpoints: (builder) => ({
            supernowaCasinoGameList: builder.query(
                {
                    query: (args) => ({
                        url: 'api/supernowa/game-list',
                        method: 'POST',
                        body: args,
                    })
                }
            ),
            supernowaAuthentication: builder.mutation(
                {
                    query: (args) => ({
                        url: '/api/supernowa/v1/authentication',
                        method: 'POST',
                        body: args,
                    })
                }
            )
        })
    }
)

export const { useSupernowaCasinoGameListQuery, useSupernowaAuthenticationMutation } = supernowaApi;