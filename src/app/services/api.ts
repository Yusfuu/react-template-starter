import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const BASE_API_URI = import.meta.env.VITE_APP_API_URI;

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URI,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Posts'],
  endpoints: () => ({}),
});
