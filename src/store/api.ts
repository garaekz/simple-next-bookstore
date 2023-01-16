import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilterState } from './slices/filters.slice';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPaginatedBooks: builder.query({
      query: (params: {page: number, filters: FilterState}) => {
        let { page, filters } = params;
        console.log('page', page);
        console.log('filters', filters);
        if (page < 1) {
          page = 1;
        }
        let url = `books?page=${page}`;
        if (filters) {
          if (filters.genre) {
            url += `&genre=${filters.genre}`;
          }
          if (filters.author) {
            url += `&author=${filters.author}`;
          }
        }
        url += `&sort=${filters.sort}`;
        return url;
      },
    }),
    getBook: builder.query({
      query: (slug: string) => {
        console.log('getBook');
        return `books/${slug}`
      },
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
    getRelatedBooks: builder.query({
      query: (id: string) => `books/${id}/related`,
    }),
  }),
})

export const { 
  useGetPaginatedBooksQuery,
  useGetBookQuery,
  useGetFeaturedBooksQuery,
  useGetAllGenresQuery,
  useGetAllAuthorsQuery,
  useGetRelatedBooksQuery
} = api;