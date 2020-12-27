import { useMovies } from "../providers/movies";

export default function MovieRow({ movie }) {
  const { movies, setMovies } = useMovies();

  const toggleMovie = (movieToToggle) =>
    setMovies(
      movies.map((movie) =>
        movie !== movieToToggle ? movie : { ...movie, watched: !movie.watched }
      )
    );

  const deleteMovie = (movieToDelete) =>
    setMovies(movies.filter((movie) => movie !== movieToDelete));

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-7">{movie.title}</div>
        <div className="col-5">
          <button
            className="btn btn-info mx-1"
            onClick={() => toggleMovie(movie)}
          >
            {movie.watched ? "Unwatch" : "Watched"}
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={() => deleteMovie(movie)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
