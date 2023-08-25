import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.3/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "11QT8AH-B9F4ZD6-P5XJFD3-03M0FA5");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAllMovies: builder.query({
      query: () => ({
        url: "movie",
      }),
    }),
  }),
});

export const { useFetchAllMoviesQuery } = moviesApi;
