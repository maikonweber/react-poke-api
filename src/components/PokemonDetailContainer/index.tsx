import React from 'react';

interface PokemonDetailContainerProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({ pokemon }) => {
  // You can fetch additional details about the selected Pokémon using the provided URL (pokemon.url)
  // For simplicity, let's just display the name for now
  return (
    <div className="bg-green-100 p-4 mt-4">
      <h2 className="text-2xl font-bold">Details for {pokemon.name}</h2>
      {/* You can add more details here based on your requirements */}
    </div>
  );
};

export default PokemonDetailContainer;