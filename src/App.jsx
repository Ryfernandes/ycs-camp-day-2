import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*
  let starters = [
    {name: "Happy", id: "6"},
    {name: "Zappy", id: "25"},
    {name: "Frederick", id: "1"}
  ];
  */

  const [myPokemon, setMyPokemon] = useState([]);

  function addPokemon() {
    let newPokemon = [...myPokemon]; //Copy the existing state
    newPokemon.push({name: "Name", id: Math.floor(Math.random() * 1025 + 1).toString()});
    console.log(newPokemon);
    setMyPokemon(newPokemon);
  }

  // Going to break into steps later with different files

  return (
    <>
      <h1 className='title' >My Pokémon Team</h1>
      <ul>
        {myPokemon.map((pokemon) => {
          return (
            <li>
              <PokemonCard name={pokemon.name} id={pokemon.id} />
            </li>
          )
        })}
      </ul>
      <button onClick={addPokemon}>Add Random Pokémon</button>
    </>
  )
}

// PokemonCard component (may move into own file during lesson)

function PokemonCard(props) {
  let myName = props['name'];
  let myId = props['id'];

  let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myId}.png`

  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={imageUrl} alt={myName} />
      </div>
      <input type="text" placeholder={myName} className="pokemon-name"></input>
    </div>
  );
};

export default App
