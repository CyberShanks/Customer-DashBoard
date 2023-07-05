import { useState, createContext } from "react";
import SortTable from "../components/Table/SortTable";
import UserCount from "../components/Table/UserCount";
import TableControls from "../components/Table/TableControls";
import "../components/Table/assets/css/Table.css"

// UserCount Context updated by <SortTable/Rows/>, used by <UserCount/>
export const UserCountContext = createContext(null);

// Query Context updated by <SearchBar/>, used by <SortTable/Rows>
export const QueryContext = createContext(null);

const DashboardPage = ({ dataURL }) => {
  const [query, setQuery] = useState("");
  const [userCount, setUserCount] = useState(0);

  return (
    <div id="content-container">
      <UserCountContext.Provider value={{ userCount, setUserCount }}>
        <QueryContext.Provider value={{ query, setQuery }}>
          <TableControls />
          <SortTable dataURL={dataURL} />
          <UserCount />
        </QueryContext.Provider>
      </UserCountContext.Provider>
    </div>
  );
};

export default DashboardPage;
