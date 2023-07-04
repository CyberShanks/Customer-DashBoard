import { useContext } from "react";
import { QueryContext } from "../App";

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
