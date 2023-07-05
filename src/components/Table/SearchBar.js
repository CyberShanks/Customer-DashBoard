import { useContext } from "react";
import { QueryContext } from "./Table";

// Provides a Text Input Field which uses Change Event Listener to update the Query Context
const SearchBar = () => {
  let { setQuery } = useContext(QueryContext);

  return (
    <input
      type="text"
      placeholder="Search"
      className="search"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
export default SearchBar;
