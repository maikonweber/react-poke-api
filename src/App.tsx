import React, { useState } from 'react';
import Header from './components/Header'
import InputComponent from './components/InputComponent';
import ScrollContainer from './components/ScrollContainer'
import Footer from './components/Footer';
import axios from 'axios'

interface Pokemon {
  name: string;
}

const  App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 10,
          offset: searchResults.length,
        },
      });

      const newPokemonList = response.data.results.map((pokemon: { name: string }) => ({
        name: pokemon.name,
      }));
      setSearchResults((prevItems) => [...prevItems, ...newPokemonList]);
    } catch (error) {
      console.error('Error fetching more items:', error);
    }
  };

  return (
    <>
    <Header />
    <InputComponent onSearch={handleSearch} />
    <ScrollContainer items={searchResults} onIntersection={() => handleSearch('')}/>
    <Footer />
    </>
  );
}

export default App;
