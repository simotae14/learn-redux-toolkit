import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App.tsx'
import './index.css'

import { fakePokemonDetailData, fakePokemonListing } from './utils/fakeData.ts'
import { createApi, ApiProvider } from '@reduxjs/toolkit/query/react'

function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

const api = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        await simulateLoading();
        return { data: fakePokemonListing };
      },
    }),
    pokemonDetail: build.query({
      async queryFn() {
        await simulateLoading();
        return { data: fakePokemonDetailData };
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
