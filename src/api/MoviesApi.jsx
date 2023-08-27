import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toMovieById, toAllMovies, toMovieByQuery } from "./transformResponse";

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
      query: ({ limit }) => ({
        url: "movie",
        params: { limit },
      }),
      transformResponse: toAllMovies,
    }),
    fetchMovieById: builder.query({
      query: ({ movieId }) => ({
        url: `movie/${movieId}`,
      }),
      transformResponse: toMovieById,
    }),
    fetchMovieByQuery: builder.query({
      query: ({ limit, name }) => ({
        url: "movie",
        params: { limit, name },
      }),
      transformResponse: toMovieByQuery,
    }),
  }),
});

export const {
  useFetchAllMoviesQuery,
  useFetchMovieByIdQuery,
  useFetchMovieByQueryQuery,
} = moviesApi;
