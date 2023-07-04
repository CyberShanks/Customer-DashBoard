import SortTable from "./components/SortTable";
import SearchBar from "./components/SearchBar";
import { createContext, useState } from "react";
import UserCount from "./components/UserCount";

export const QueryContext = createContext(null);
export const UserCountContext = createContext(null);

const dataApi = "https://jsonplaceholder.typicode.com/users";

// NEED TO USE useContext Hook for states -> userCount AND -> query
const App = () => {
  const [query, setQuery] = useState("");
  const [userCount, setUserCount] = useState(0);

  return (
    <div className="App">
      <UserCountContext.Provider value={{ userCount, setUserCount }}>
        <QueryContext.Provider value={{ query, setQuery }}>
          <SearchBar />
          <SortTable dataURL={dataApi} />
          <UserCount />
        </QueryContext.Provider>
      </UserCountContext.Provider>
    </div>
  );
};

export default App;
