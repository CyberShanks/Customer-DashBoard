import SortTable from "./components/SortTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  const queryUpdate = (state) => {
    setQuery(state);
  };

  return (
    <div className="App">
      <SearchBar updateQuery={queryUpdate} />
      <SortTable query={query} />
    </div>
  );
};

export default App;
