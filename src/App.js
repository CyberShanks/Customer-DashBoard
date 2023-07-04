import SortTable from "./components/SortTable";
import SearchBar from "./components/SearchBar";
import { createContext, useState } from "react";

export const QueryContext = createContext(null);

const dataApi = "https://jsonplaceholder.typicode.com/users";

// NEED TO USE useContext Hook for states -> userCount AND -> query
const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <QueryContext.Provider value={{ query, setQuery }}>
        <SearchBar />
        <SortTable dataURL={ dataApi } />
      </QueryContext.Provider>
    </div>
  );
};

export default App;
