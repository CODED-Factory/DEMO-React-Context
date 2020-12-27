import { useMovies } from "../providers/movies";

export default function MovieRow({ movie }) {
  const { toggleMovie, deleteMovie } = useMovies();

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
