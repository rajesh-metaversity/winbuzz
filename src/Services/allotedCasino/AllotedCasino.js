import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const allotedCasino = createApi({
  reducerPath: "allotedCasino",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    allotedCasino: builder.mutation({
      query: (body) => ({
        url: "user/alloted-casino-list",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAllotedCasinoMutation } = allotedCasino;
