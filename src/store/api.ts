import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPaginatedBooks: builder.query({
      query: (page: number) => `books?page=${page}`,
    }),
    getBook: builder.query({
      query: (id: number) => `books/${id}`,
    }),
    getFeaturedBooks: builder.query({
      query: () => 'books/featured',
    }),
    getAllGenres: builder.query({
      query: () => 'genres',
    }),
    getAllAuthors: builder.query({
      query: () => 'authors',
    }),
  }),
})

export const { useGetPaginatedBooksQuery, useGetBookQuery, useGetFeaturedBooksQuery, useGetAllGenresQuery, useGetAllAuthorsQuery } = api;