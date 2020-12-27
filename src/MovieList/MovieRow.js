export default function MovieRow({ movie }) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-7">{movie.title}</div>
        <div className="col-5">
          <button
            className="btn btn-info mx-1"
            onClick={() => alert(`Toggle ${movie.title} watched`)}
          >
            {movie.watched ? "Unwatch" : "Watched"}
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={() => alert(`Delete ${movie.title}`)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
