import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
export const footerData = createApi({
  reducerPath: "footerData",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    footerdata: builder.mutation({
      query: (body) => ({
        url: "/api/admin/getData",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useFooterdataMutation } = footerData;
