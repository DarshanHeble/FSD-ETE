import React, { useState, useEffect } from "react";

export default function BreedEdit({ breed, onUpdate, onCancel }) {
  const [name, setName] = useState(breed?.name || "");
  const [origin, setOrigin] = useState(breed?.origin || "");
  const [description, setDescription] = useState(breed?.description || "");

  useEffect(() => {
    setName(breed?.name || "");
    setOrigin(breed?.origin || "");
    setDescription(breed?.description || "");
  }, [breed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && origin && description) {
      onUpdate({ ...breed, name, origin, description });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 mb-6 max-w-md mx-auto border border-gray-200"
    >
      <h2 className="text-xl font-extrabold text-blue-700 mb-4 flex items-center justify-center">
        Edit Breed
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Breed Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="block p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-[80px]"
          required
        />
      </div>
      <div className="flex gap-2 mt-6">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded shadow hover:from-blue-600 hover:to-blue-800 transition"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded shadow transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
