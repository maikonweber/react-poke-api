import React from 'react';
import { PokemonDetails } from '../../App'

interface PokemonDetailContainerProps {
  pokemon: PokemonDetails | null;
}


const PokemonDetailContainer: React.FC<PokemonDetailContainerProps> = ({ pokemon }) => {
 
  return (
    <div className="flex justify-center flex-col max-h-62 max-w-82 item-center bg-green-100 p-20 mt-4">
     
      <img src={pokemon?.sprites} alt={pokemon?.name}></img>
      <h1 className="text-2xl text-center color-gray-200 font-bold">{pokemon?.name}</h1> 
      {/* You can add more details here based on your requirements */}
    </div>
  );
};

export default PokemonDetailContainer;