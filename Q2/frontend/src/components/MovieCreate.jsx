import React, { useState } from "react";

const MovieCreate = ({ onCreated }) => {
  const [form, setForm] = useState({
    title: "",
    director: "",
    genre: "",
    release_year: "",
    rating: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setForm({
      title: "",
      director: "",
      genre: "",
      release_year: "",
      rating: "",
    });
    if (onCreated) onCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow rounded-lg mb-6 border border-gray-200 flex flex-col gap-3"
    >
      <h2 className="text-xl font-bold mb-2 text-green-700">Add Movie</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <input
        name="director"
        value={form.director}
        onChange={handleChange}
        placeholder="Director"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Genre"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <input
        name="release_year"
        value={form.release_year}
        onChange={handleChange}
        placeholder="Release Year"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <input
        name="rating"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Movie"}
      </button>
    </form>
  );
};

export default MovieCreate;
