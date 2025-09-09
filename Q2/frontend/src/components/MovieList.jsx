import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center py-8 text-lg text-gray-500">Loading...</div>
    );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Movie List</h2>
      <ul className="grid gap-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 flex flex-col gap-1"
          >
            <span className="text-lg font-semibold text-gray-800">
              {movie.title}{" "}
              <span className="text-sm text-gray-500">
                ({movie.release_year})
              </span>
            </span>
            <span className="text-gray-600">
              Director: <span className="font-medium">{movie.director}</span>
            </span>
            <span className="text-gray-600">
              Genre: <span className="font-medium">{movie.genre}</span>
            </span>
            <span className="text-gray-600">
              Rating: <span className="font-medium">{movie.rating}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
