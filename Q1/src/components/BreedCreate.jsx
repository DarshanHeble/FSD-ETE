import React, { useState } from "react";

export default function BreedCreate({ onAdd }) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && origin && description) {
      onAdd({ name, origin, description });
      setName("");
      setOrigin("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 mb-6 max-w-md mx-auto border border-gray-200"
    >
      <h2 className="text-xl font-extrabold text-blue-700 mb-4 flex items-center">
        Add New Breed
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
          className="block p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded shadow hover:from-blue-600 hover:to-blue-800 transition"
      >
        Add Breed
      </button>
    </form>
  );
}
