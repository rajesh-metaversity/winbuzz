import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const IsSelf = createApi({
  reducerPath: "IsSelf",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    IsSelf: builder.mutation({
      query: (body) => ({
        url: "/login/is-self-by-app-url",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useIsSelfMutation } = IsSelf;
