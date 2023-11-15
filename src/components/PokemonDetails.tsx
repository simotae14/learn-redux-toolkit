import React from 'react'

import { usePokemonDetailQuery } from '../main';

const listFormatter = new Intl.ListFormat("en-GB", {
  style: "short",
  type: "conjunction",
});

export default function PokemonDetails({ pokemonName }: { pokemonName: string }) {
  const { isLoading, isError, data, isUninitialized } = usePokemonDetailQuery({
    name: pokemonName
  });

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {listFormatter.format(data.types.map((item) => item.type.name))}
        </li>
      </ul>
    </article>
  )
}
