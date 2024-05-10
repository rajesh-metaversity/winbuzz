import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const PnlApi = createApi({
  reducerPath: "PnlApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    oddsPnl: builder.mutation({
      query: (body) => ({
        url: "/enduser/user-odds-pnl",
        method: "POST",

        body,
      }),
    }),
    winnerPnl: builder.mutation({
      query: (body) => ({
        url: "/enduser/user-winner-pnl",
        method: "POST",
        body,
      }),
    }),
    fancyPnl: builder.query({
      query: (body) => ({
        url: "/enduser/user-fancy-pnl",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useOddsPnlMutation, useWinnerPnlMutation, useFancyPnlQuery } =
  PnlApi;
