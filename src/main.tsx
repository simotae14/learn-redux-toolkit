import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Provider } from 'react-redux'
//import { store } from './app/store'
import App from './App.tsx'
import './index.css'

import { createApi, ApiProvider } from '@reduxjs/toolkit/query/react'


const api = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
        // error handling
        if (result.ok) {
          const data = await result.json();
          return { data };
        } else {
          return { error: "something went wrong" }
        } 
      },
    }),
    pokemonDetail: build.query({
      async queryFn() {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
        // error handling
        if (result.ok) {
          const data = await result.json();
          return { data };
        } else {
          return { error: "something went wrong" }
        } 
      },
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
