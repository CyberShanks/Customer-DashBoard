import { createContext, useState } from "react";
import SortTable from "./components/SortTable";
import SearchBar from "./components/SearchBar";
import UserCount from "./components/UserCount";
import "./App.css"

// UserCount Context updated by <SortTable/Rows/>, used by <UserCount/>
export const UserCountContext = createContext(null);

// Query Context updated by <SearchBar/>, used by <SortTable/Rows>
export const QueryContext = createContext(null);

// API where JSON formatted data is fetched from
const dataApi = "https://jsonplaceholder.typicode.com/users";

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
