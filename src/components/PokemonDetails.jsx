import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = ({ pokemonData }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const pokemonById = pokemonData.find((pokeman) => {
      return pokeman._id === Number(id)
    })

    setPokemon(pokemonById)
  }, [])

  return (
    <>
      <div>PokemonDetails</div>
      <h2>{pokemon.name}</h2>
      <h4>Weight: {pokemon.weight}</h4>
      <h4>Height: {pokemon.height}</h4>
    </>
  );
};

export default PokemonDetails;
