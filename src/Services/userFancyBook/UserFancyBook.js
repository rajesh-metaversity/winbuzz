import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const userFancyBook = createApi({
  reducerPath: "userFancyBook",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    userFancyBook: builder.query({
      query: (body) => ({
        url: "/enduser/user-fancy-book",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUserFancyBookQuery } = userFancyBook;
