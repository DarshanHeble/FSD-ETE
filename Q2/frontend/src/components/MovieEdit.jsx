import React, { useState } from "react";

const MovieEdit = ({ movie, onUpdated }) => {
  const [form, setForm] = useState(movie);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`http://localhost:5000/movies/${movie.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (onUpdated) onUpdated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow rounded-lg mb-6 border border-gray-200 flex flex-col gap-3"
    >
      <h2 className="text-xl font-bold mb-2 text-yellow-700">Edit Movie</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <input
        name="director"
        value={form.director}
        onChange={handleChange}
        placeholder="Director"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Genre"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <input
        name="release_year"
        value={form.release_year}
        onChange={handleChange}
        placeholder="Release Year"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <input
        name="rating"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

export default MovieEdit;
