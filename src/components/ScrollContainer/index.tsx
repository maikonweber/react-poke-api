// ScrollContainer.tsx
import React, { useEffect } from 'react';
import PokemonCard from '../PokemonCard';
import { Pokemon } from '../../App'

interface ScrollContainerProps {
  items: Pokemon[];
  onIntersection?: () => void;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ items, onIntersection }) => {
  // Intersection Observer callback to fetch more items when user reaches the bottom
 

  useEffect(() => {

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && onIntersection) {
        onIntersection();
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const lastItem = document.getElementById('last-item');
    if (lastItem) {
      observer.observe(lastItem);
    }


    return () => {
      observer.disconnect();
    };
  }, [onIntersection]);

  return (
    <div className="bg-red-100 max-h-full overflow-y-auto border-t mt-4 p-4">
      {items.map((pokemon, index) => (
        <div key={index} className="border-b py-2" id={index === items.length - 1 ? 'last-item' : undefined}>
          <PokemonCard name={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default ScrollContainer;