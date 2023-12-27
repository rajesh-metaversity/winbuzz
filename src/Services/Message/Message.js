import { dynamicBaseQuery } from "../BadRequestHandler/BadRequestHandler";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const Message = createApi({
  reducerPath: "message",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    Message: builder.query({
      query: body => ({
        url: "/enduser/get-user-message",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useMessageQuery } = Message;
