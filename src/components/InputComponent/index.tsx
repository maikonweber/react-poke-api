import React from 'react';

const InputComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-4 rounded-md">
        <label htmlFor="inputField" className="block text-gray-700 font-bold mb-2">
          Your Input:
        </label>
        <input
          type="text"
          id="inputField"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter text here"
        />
      </div>
    </div>
  );
};

export default InputComponent;