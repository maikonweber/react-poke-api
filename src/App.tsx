import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import InputComponent from './components/InputComponent';
import ScrollContainer from './components/ScrollContainer'
import Footer from './components/Footer';
import axios from 'axios'
import PokemonDetailContainer from './components/PokemonDetailContainer';

interface Pokemon {
  name: string;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [isDetailedSearch, setIsDetailedSearch] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);


  useEffect(() => {
    //   handleSearch('')
  }, [isDetailedSearch])

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm !== '') {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)

        const pokemonDetails = {
          name: response.data.name,
          // Add more details as needed
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
