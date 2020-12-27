import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import MoviesContext from "./providers/movies";

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

function App() {
  const [movies, setMovies] = useState(_movies);

  const addMovie = (title) => setMovies([...movies, { title, watched: false }]);

  const toggleMovie = (movieToToggle) =>
    setMovies(
      movies.map((movie) =>
        movie !== movieToToggle ? movie : { ...movie, watched: !movie.watched }
      )
    );

  const deleteMovie = (movieToDelete) =>
    setMovies(movies.filter((movie) => movie !== movieToDelete));

  return (
    <MoviesContext.Provider value={movies}>
      <div className="container">
        <AddMovie addMovie={addMovie} />
        <div className="row">
          <MovieList toggleMovie={toggleMovie} deleteMovie={deleteMovie} />
          <MovieList
            toggleMovie={toggleMovie}
            deleteMovie={deleteMovie}
            watched
          />
        </div>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
