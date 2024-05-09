import React from 'react';

const Card = () => {
  return (
    <div className="w-10/12 bg-white rounded-lg shadow-md p-6 mx-auto mb-6 flex items-center justify-between">
      {/* Left side with bold name */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-sm text-gray-500">Description of the card...</p>
      </div>

      {/* Right side with buttons */}
      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">submit result </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">view request</button>
      </div>
    </div>
  );
};

export default Card;
