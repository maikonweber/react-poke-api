import React from 'react';

interface PokemonDetailContainerProps {
  pokemon: PokemonDetails | null;
}

interface PokemonDetails {
  name: string;
  order: number;
  id: number;
  sprites: string;
}


const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({ pokemon }) => {
 
  return (
    <div className="flex justify-center flex-col item-center bg-green-100 p-4 mt-4">
      {/* <h2 className="text-2xl color-gray-200 font-bold">{pokemon?.name}</h2> */}
      <img src={pokemon?.sprites} alt={pokemon?.name}></img>
      {/* You can add more details here based on your requirements */}
    </div>
  );
};

export default PokemonDetailContainer;