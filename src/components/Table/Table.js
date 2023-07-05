import { useState, createContext } from "react";
import SortTable from "./SortTable";
import UserCount from "./UserCount";
import ContentTop from "./ContentTop";
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
          <ContentTop />
          <SortTable dataURL={dataURL} />
          <UserCount />
        </QueryContext.Provider>
      </UserCountContext.Provider>
    </div>
  );
};

export default Table;
