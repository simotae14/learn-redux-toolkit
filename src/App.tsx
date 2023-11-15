import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  // grab current count from the store
  /*
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    dispatch(incremented());
  }

  const amount = 10;

  const handleClickAmountAdded = (amount: number) => {
    dispatch(amountAdded(amount));
  }
  */

  const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(undefined);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button
          onClick={handleClick}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h2>My Pokedex</h2>
      <div>
      {selectedPokemon ? (
          <>
            <PokemonDetails pokemonName={selectedPokemon} />
            <button onClick={() => selectPokemon(undefined)}>back</button>
          </>
        ) : (
          <PokemonList onPokemonSelected={selectPokemon} />
        )}
      </div>
      {/* <div className="card">
        <button
          onClick={() => handleClickAmountAdded(amount)}
        >
          count added with {amount} is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div>
          <p>Dogs to fetch:</p>
          <select 
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} height={250} alt={breed.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  )
}

export default App
