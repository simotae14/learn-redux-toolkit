import React from 'react'

import { usePokemonListQuery } from '../app/configure';

export default function PokemonList({ onPokemonSelected }: {onPokemonSelected: (name: string) => void }) {
  const { isLoading, isError, data, isUninitialized } = usePokemonListQuery();

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }


  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  )
}
