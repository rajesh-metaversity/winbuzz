

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const activeMatch = createApi({
  reducerPath: "activeMatch",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oddsapi.247idhub.com/",
  }),
  endpoints: (builder) => ({
    activeMatch: builder.mutation({
      query: (id) => "betfair_api/active_match/" + id,
    }),
    inPlay: builder.query({
      query: () => "betfair_api/active_match/",
    }),
  }),
});
export const { useActiveMatchMutation,  useInPlayQuery} = activeMatch;