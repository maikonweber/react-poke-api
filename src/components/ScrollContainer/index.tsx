// ScrollContainer.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
}

const ScrollContainer: React.FC = () => {
  const [items, setItems] = useState<Pokemon[]>([]);

  // Simulated API call to fetch more items
  const fetchMoreItems = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 10,
          offset: items.length,
        },
      });

      const newPokemonList = response.data.results;
      setItems((prevItems) => [...prevItems, ...newPokemonList]);
    } catch (error) {
      console.error('Error fetching more items:', error);
    }
  };
  // Intersection Observer callback to fetch more items when user reaches the bottom
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      fetchMoreItems();
    }
  };

  useEffect(() => {
    fetchMoreItems();
    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    // Attach the observer to an element (in this case, the last item in the list)
    const lastItem = document.getElementById('last-item');
    if (lastItem) {
      observer.observe(lastItem);
    }

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <div className="bg-red-100 max-h-full overflow-y-auto border-t mt-4 p-4">
      {items.map((pokemon, index) => (
        <div key={pokemon.name} className="border-b py-2" id={index === items.length - 1 ? 'last-item' : undefined}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default ScrollContainer;
