import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

function App() {
  return (
    <div className="container">
      <AddMovie />
      <div className="row">
        <MovieList />
        <MovieList watched />
      </div>
    </div>
  );
}

export default App;
