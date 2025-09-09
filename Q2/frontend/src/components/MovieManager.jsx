import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieCreate from "./MovieCreate";
import MovieEdit from "./MovieEdit";
import MovieDelete from "./MovieDelete";

const MovieManager = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [refresh]);

  const handleCreated = () => setRefresh((r) => !r);
  const handleUpdated = () => {
    setEditingMovie(null);
    setRefresh((r) => !r);
  };
  const handleDeleted = () => setRefresh((r) => !r);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen rounded-lg shadow-lg">
      <MovieCreate onCreated={handleCreated} />
      {editingMovie && (
        <MovieEdit movie={editingMovie} onUpdated={handleUpdated} />
      )}
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Movie List</h2>
      <ul className="grid gap-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-2"
          >
            <div>
              <span className="text-lg font-semibold text-gray-800">
                {movie.title}{" "}
                <span className="text-sm text-gray-500">
                  ({movie.release_year})
                </span>
              </span>
              <br />
              <span className="text-gray-600">
                Director: <span className="font-medium">{movie.director}</span>
              </span>
              <br />
              <span className="text-gray-600">
                Genre: <span className="font-medium">{movie.genre}</span>
              </span>
              <br />
              <span className="text-gray-600">
                Rating: <span className="font-medium">{movie.rating}</span>
              </span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow transition"
                onClick={() => setEditingMovie(movie)}
              >
                Edit
              </button>
              <MovieDelete movieId={movie.id} onDeleted={handleDeleted} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieManager;
