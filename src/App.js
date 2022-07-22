import DetailsField from "./components/DetailsField";
import InputField from "./components/InputField";
import { useState, useEffect } from 'react'
import { ErrorBox } from "./components/ErrorBox";

function App() {

  //set the loading state
  const [loading, setLoading] = useState(false);

  //set the error state
  const [error, setError] = useState(false);

  //input field
  const [input, setInput] = useState('');

  //set the state of the pokemon
  const [pokemon, setPokemon] = useState({
    name: '',
    type: '',
    species: '',
    height: '',
    weight: '',
    image: ''
  });

  //handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  //declare the input field to console log the value when the button is clicked
  const handleClick = async (e) => {

    //set the loading state to true
    setLoading(true);

    e.preventDefault();

    //fetch the pokemon name from the input field and set it to lowercase since the API returns if the name is in lowercase
    const pokemonName = input.toLowerCase();

    //fetch the pokemon details from the API
    const fetchPokemonData = async () => {

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);

        if(response.ok) {
          const data = await response.json();

          //set the pokemon details
          setPokemon({
            name: data.name,
            type: data.types[0].type.name,
            species: data.species.name,
            height: data.height,
            weight: data.weight,
            image: data.sprites.other.dream_world.front_default
          });

          //set the loading state to false
          setLoading(false);

        } else if (response.status === 404) {
          setLoading(false);
          setError(true);
        }

        setInput('');

      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    //call the fetchPokemonData function
    fetchPokemonData();
  }

  //set up a useEffect hook to clear the error state
  useEffect(() => {
    if(pokemon.name !== '' && error) {
      setError(false);
    }
  }, [pokemon.name]);

  return (
    <div>
      <InputField
        input={input}
        handleInputChange={handleInputChange}
        handleClick={handleClick}
      />

      {pokemon.name !== '' && !error ? (
        <DetailsField
          name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          type={pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}
          species={pokemon.species}
          height={pokemon.height}
          weight={pokemon.weight}
          image={pokemon.image}
        />) : null}

      {error ? <ErrorBox /> : null}

    </div>
  )
}

export default App;