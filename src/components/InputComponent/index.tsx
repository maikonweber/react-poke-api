import React, { useState } from 'react';

interface InputComponentProps {
  onSearch: (searchTerm: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center mt-10 justify-center">
      <div className="bg-gray-200 p-4 rounded-md">
        <label htmlFor="inputField" className="block text-gray-700 font-bold mb-2">
          Your Input:
        </label>
        <div className="flex">
          <input
            type="text"
            id="inputField"
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter text here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;