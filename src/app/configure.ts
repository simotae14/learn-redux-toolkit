import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface PokemonListing {
  count: number;
  results: Array<{
    name: string;
    url: string;
  }>
}
interface PokemonDetailData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }>,
  sprites: {
    front_default: string;
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  }),
  endpoints: (build) => ({
    // void means no arguments
    pokemonList: build.query<PokemonListing, void>({
      query() {
        return {
          url: 'pokemon',
          params: {
            limit: 9
          },
          method: 'GET'
        }
      },
    }),
    pokemonDetail: build.query<PokemonDetailData, { name: string }>({
      query: ({ name }) =>`pokemon/${name}/`,
    }),
  }),
});

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),    
});

// it creates two hooks for us
export const { usePokemonListQuery, usePokemonDetailQuery } = api;

export default store;