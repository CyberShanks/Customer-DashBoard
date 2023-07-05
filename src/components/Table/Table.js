import { useState, createContext } from "react";
import SortTable from "./SortTable";
import SearchBar from "./SearchBar";
import UserCount from "./UserCount";
import "./Table.css"

// UserCount Context updated by <SortTable/Rows/>, used by <UserCount/>
export const UserCountContext = createContext(null);

// Query Context updated by <SearchBar/>, used by <SortTable/Rows>
export const QueryContext = createContext(null);

const Table = ({ dataURL }) => {
  const [query, setQuery] = useState("");
  const [userCount, setUserCount] = useState(0);

  return (
    <div id="content-container">
      <UserCountContext.Provider value={{ userCount, setUserCount }}>
        <QueryContext.Provider value={{ query, setQuery }}>
          <SearchBar />
          <SortTable dataURL={dataURL} />
          <UserCount />
        </QueryContext.Provider>
      </UserCountContext.Provider>
    </div>
  );
};

export default Table;
