import { useContext } from "react";
import { QueryContext } from "./Table";
import searchIcon from "./assets/icons/magnify.svg";

// Provides a Text Input Field which uses Change Event Listener to update the Query Context
const SearchBar = () => {
  let { setQuery } = useContext(QueryContext);

  return (
    <div className="search-area">
      <img className="icon" src={searchIcon} alt="Search Icon" />
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
