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

export function useMovies() {
  const [movies, setMovies] = useContext(MoviesContext);
  return { movies, setMovies };
}

export function MoviesProvider({ children, value }) {
  const moviesState = useState(_movies);
  return (
    <MoviesContext.Provider value={moviesState}>
      {children}
    </MoviesContext.Provider>
  );
}
