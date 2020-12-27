import { useState } from "react";
import { useMovies } from "../providers/movies";
import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";

export default function MovieList({ watched }) {
  const { allMovies } = useMovies();
  const [query, setQuery] = useState("");

  const movies = allMovies.filter((movie) => movie.watched === !!watched);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const movieRows = filteredMovies.map((movie, idx) => (
    <MovieRow key={movie.title + idx} movie={movie} />
  ));

  return (
    <div className="col-md-6 col-12">
      <div className="my-4">
        <h3>
          {watched ? "Watched" : "Watchlist"}
          <span className="badge badge-pill badge-light ml-4">
            {filteredMovies.length}
            {filteredMovies.length !== movies.length &&
              ` out of ${movies.length}`}
          </span>
        </h3>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item p-0">
            <SearchBar onSearch={setQuery} />
          </li>
          {movieRows}
        </ul>
      </div>
    </div>
  );
}
