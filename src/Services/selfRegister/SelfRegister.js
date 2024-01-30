import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const register = createApi({
  reducerPath: "register",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/user/self-register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = register;
