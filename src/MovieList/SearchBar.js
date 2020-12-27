import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ onSearch }) {
  return (
    <div className="input-group input-group-lg m-0">
      <input
        type="text"
        className="form-control border-0"
        placeholder="search"
        aria-label="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="my-auto mr-3">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
}
