import React from 'react'

import { usePokemonListQuery } from '../main';

export default function PokemonList({ onPokemonSelected }: () => void) {
  const { isLoading, isError, isSuccess, data } = usePokemonListQuery();

  if (isLoading) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  if (isSuccess) {
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
}
