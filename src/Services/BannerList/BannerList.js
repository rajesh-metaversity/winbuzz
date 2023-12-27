import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const bannerList = createApi({
  reducerPath: "bannerList",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    bannerListData: builder.mutation({
      query: body => ({
        url: '/enduser/user-banner-list',
        method: 'POST',
        body
    })
    }),
  }),
});
export const { useBannerListDataMutation } = bannerList;
