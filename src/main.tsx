import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App.tsx'
import './index.css'

import { fakePokemonDetailData, fakePokemonListing } from './utils/fakeData.ts'
import { createApi, ApiProvider } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: () => {},
  endpoints: (builder) => ({
    pokemonList: builder.query({
      queryFn() {
        return {
          data: fakePokemonListing,
        };
      }
    }),
    pokemonDetail: builder.query({
      queryFn() {
        return {
          data: fakePokemonDetailData,
        };
      }
    }),
  }),
});

// it creates two hooks for us
const { usePokemonListQuery, usePokemonDetailQuery } = api;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>,
)
