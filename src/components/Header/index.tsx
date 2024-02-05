import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Pokémon Header</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;