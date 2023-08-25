import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", apiKey);
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
