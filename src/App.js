import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { MoviesProvider } from "./providers/movies";

function App() {
  return (
    <MoviesProvider>
      <div className="container">
        <AddMovie />
        <div className="row">
          <MovieList />
          <MovieList watched />
        </div>
      </div>
    </MoviesProvider>
  );
}

export default App;
