import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const Favourite = createApi({
  reducerPath: "bannerList",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    userFav: builder.mutation({
      query: (body) => ({
        url: '/bmx/user/user-fav-market',
        method: 'POST',
        body
    })
    }),
    createFav: builder.mutation({
      query: (body) => ({
        url: '/bmx/user/user-fav-market/create',
        method: 'POST',
        body
    })
    }),
    deleteFav: builder.mutation({
      query: (body) => ({
        url: '/bmx/user/user-fav-market/delete',
        method: 'POST',
        body
    })
    }),
   
  }),
});
export const {useUserFavMutation, useCreateFavMutation, useDeleteFavMutation} = Favourite;
