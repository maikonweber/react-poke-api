// ScrollContainer.tsx
import React, { useEffect, useState } from 'react';

const ScrollContainer: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);

  // Simulated API call to fetch more items
  const fetchMoreItems = () => {
    const newItems = Array.from({ length: 10 }, (_, index) => index + items.length + 1);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  // Intersection Observer callback to fetch more items when user reaches the bottom
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      fetchMoreItems();
    }
  };

  useEffect(() => {
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
    <div className="flex items-center justify-center bg-red-100 max-h-40 overflow-y-auto border-t mt-4 p-4">
      {items.map((item) => (
        <div key={item} className="border-b py-2" id={item === items[items.length - 1] ? 'last-item' : undefined}>
          Item {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollContainer;
