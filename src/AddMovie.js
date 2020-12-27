import { useState } from "react";
import { useMovies } from "./providers/movies";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const { addMovie } = useMovies();

  const submitMovie = (e) => {
    e.preventDefault();
    if (title) addMovie(title);
    setTitle("");
  };

  return (
    <div className="col-6 mx-auto">
      <form onSubmit={submitMovie}>
        <div className="input-group input-group-lg my-3">
          <input
            type="text"
            className="form-control"
            placeholder="add a movie"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Movie"
            aria-describedby="add-button"
          />
          <div className="input-group-append">
            <button className="btn btn-info" type="submit" id="add-button">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
