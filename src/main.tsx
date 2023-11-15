import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Provider } from 'react-redux'
//import { store } from './app/store'
import App from './App.tsx'
import './index.css'

import { createApi, ApiProvider, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  }),
  endpoints: (build) => ({
    pokemonList: build.query({
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
    pokemonDetail: build.query({
      query: ({ name }) =>`pokemon/${name}/`,
    }),
  }),
});

// it creates two hooks for us
export const { usePokemonListQuery, usePokemonDetailQuery } = api;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
