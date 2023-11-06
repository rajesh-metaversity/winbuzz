import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const FavList = createApi({
  reducerPath: "activeMatch",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oddsapi.247idhub.com/",
  }),
  endpoints: (builder) => ({
    favList: builder.mutation({
      query: (id) => "/betfair_api/fancy/multi/" + id,
    }),
  }),
});
export const { useFavListMutation } =
FavList;
