import { createApi } from "@reduxjs/toolkit/query";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";

export const signUp = createApi({
    reducerPath: "signUp",
    baseQuery: dynamicBaseQuery,
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: "",
                method: "POST",
                body
            })
        })

    })
})