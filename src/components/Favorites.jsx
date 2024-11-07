import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = ({ onCitySelect }) => {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  const fetchFavorites = async () => {
    const response = await axios.get('http://localhost:5000/favorites');
    setFavorites(response.data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const addFavorite = async () => {
    if (newFavorite) {
      await axios.post('http://localhost:5000/favorites', { name: newFavorite });
      fetchFavorites();
      setNewFavorite('');
    }
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:5000/favorites/${id}`);
    fetchFavorites();
  };

  return (
    <div className="bg-white shadow-md shadow-gray-400 p-6 rounded-lg w-[40%] mx-auto">
      <h3 className="text-lg font-semibold mb-4">Favorites</h3>
      <div className="flex">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Add favorite city"
          className="p-2 border border-gray-300 rounded-l-md flex-grow focus:outline-none"
        />
        <button
          onClick={addFavorite}
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {favorites.map((fav) => (
          <li key={fav.id} className="flex justify-between items-center py-2 border-b">
            <span
              onClick={() => onCitySelect(fav.name)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {fav.name}
            </span>
            <button
              onClick={() => removeFavorite(fav.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
