import React, { useState } from 'react';

const CardComponent = () => {
  const [cards, setCards] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newCardDescription, setNewCardDescription] = useState('');

  const addCard = () => {
    if (newCardDescription.trim() !== '') {
      setCards([...cards, { id: Date.now(), description: newCardDescription }]);
      setNewCardDescription('');
      setIsFormVisible(false);
    }
  };

  const handleInputChange = (e) => {
    setNewCardDescription(e.target.value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4 relative">
      <h2 className="text-2xl font-bold mb-4 text-center">Services</h2>
      <div className="space-y-4">
        {cards.map(card => (
          <div
            key={card.id}
            className="bg-gray-100 shadow-md p-4 rounded-lg flex justify-between items-center transform transition-all hover:scale-105"
          >
            <span className="text-lg font-semibold">{card.description}</span>
            <button
              className="opacity:0 text-red-400 opacity-75 hover:bg-red-600 hover:text-zinc-50 hover:color-white   hover:opacity-100 text-white py-1 px-3 rounded-lg transition-colors"
              onClick={() => setCards(cards.filter(c => c.id !== card.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {isFormVisible && (
        <div className="absolute bottom-16 right-4 bg-white p-4 shadow-lg rounded-lg transform transition-all">
          <input
            type="text"
            value={newCardDescription}
            onChange={handleInputChange}
            placeholder="Enter description"
            className="border p-2 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addCard}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full transition-colors"
          >
            Add Card
          </button>
        </div>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center absolute bottom-4 right-4 shadow-lg transform transition-all hover:scale-110"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        +
      </button>
    </div>
  );
};

export default CardComponent;
