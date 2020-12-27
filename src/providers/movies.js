import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

const _movies = [
  {
    title: "Spider-lad",
    watched: true,
  },
  {
    title: "Bu Waleed Goes on an Adventure",
    watched: true,
  },
  {
    title: "Taken",
    watched: false,
  },
  {
    title: "Star Wars",
    watched: true,
  },
];

export function useMovies(watched) {
  const [allMovies, setMovies] = useContext(MoviesContext);

  const watchedMovies = allMovies.filter((movie) => movie.watched);
  const unwatchedMovies = allMovies.filter((movie) => !movie.watched);

  const addMovie = (title) =>
    setMovies([...allMovies, { title, watched: false }]);

  const toggleMovie = (movieToToggle) =>
    setMovies(
      allMovies.map((movie) =>
        movie !== movieToToggle ? movie : { ...movie, watched: !movie.watched }
      )
    );

  const deleteMovie = (movieToDelete) =>
    setMovies(allMovies.filter((movie) => movie !== movieToDelete));

  return {
    addMovie,
    movies: watched ? watchedMovies : unwatchedMovies,
    deleteMovie,
    setMovies,
    toggleMovie,
  };
}

export function MoviesProvider({ children }) {
  const moviesState = useState(_movies);
  return (
    <MoviesContext.Provider value={moviesState}>
      {children}
    </MoviesContext.Provider>
  );
}
