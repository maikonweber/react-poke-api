// ScrollContainer.tsx
import React, { useEffect } from 'react';

interface Pokemon {
  name: string;
}

interface ScrollContainerProps {
  items: Pokemon[];
  onIntersection?: () => void;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ items, onIntersection }) => {
  // Intersection Observer callback to fetch more items when user reaches the bottom
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && onIntersection) {
      onIntersection();
    }
  };

  useEffect(() => {
    // Create an Intersection Observer
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
        <div key={pokemon.name} className="border-b py-2" id={index === items.length - 1 ? 'last-item' : undefined}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default ScrollContainer;