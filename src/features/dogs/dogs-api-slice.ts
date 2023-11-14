import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.thedogapi.com/v1',
    // for authentication
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      // the return type is inferred by the builder.query method and also the argument type which is optional
      fetchBreeds: builder.query<Breed[], number | void>({
        // limit the number of results
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        }
      })
    }
  }
});

export const { useFetchBreedsQuery } = apiSlice;