import React, { useState } from 'react';
import Header from './components/Header'
import InputComponent from './components/InputComponent';
import ScrollContainer from './components/ScrollContainer'
import Footer from './components/Footer';
import axios from 'axios'
import PokemonDetailContainer from './components/PokemonDetailContainer';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png

interface PokemonDetails {
  name: string;
  url: string;
  order: number;
  id: number;
  sprites: string;
}

interface Pokemon {
  name: string
  url: string
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [isDetailedSearch, setIsDetailedSearch] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm !== '') {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        console.log(response)
        const pokemonDetails = {
          name: response.data.name,
          url: response.data.url,
          order: response.data.order,
          id: response.data.id,
          sprites: response.data.sprites.front_default,
        };
        
        setIsDetailedSearch(true);
        setSelectedPokemon(pokemonDetails);
      } catch (error) {
        console.error('Error fetching more items:', error);
      }
    } else {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
          params: {
            limit: 5,
            offset: searchResults.length,
          },
        });
        
        const newPokemonList = response.data.results.map((pokemon: { name: string, url: string }) => ({
          name: pokemon.name,
          url: pokemon.url
        }));
        setIsDetailedSearch(false);
        setSearchResults((prevItems) => [...prevItems, ...newPokemonList]);
      } catch (error) {
        console.error('Error fetching more items:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <InputComponent onSearch={handleSearch}  />
      {isDetailedSearch ? (
        <PokemonDetailContainer pokemon={selectedPokemon} />
      ) : (
        <ScrollContainer items={searchResults} onIntersection={() => handleSearch('')} />
      )}
      <Footer />
    </>
  );
}

export default App;
