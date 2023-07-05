import { createContext, useEffect, useState } from "react";
import Rows from "./Rows";
import TableHead from "./TableHead";

// User Context updated by <HeaderRows />, used by <Rows />
export const UserContext = createContext(null);

// Container Component for <HeaderRows/> and <Rows/>, provides them with UserContext
const SortTable = ({ dataURL }) => {
  const [users, setUsers] = useState([]);

  
/**
 * The function fetchUsers is an asynchronous function that fetches data from a specified URL and sets
 * the users data if the response contains data.
 * @param url - The `url` parameter is the URL of the API endpoint from which you want to fetch the
 * users' data.
 */
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
     const catchError = true; 
    }
  };

  useEffect(() => {
    fetchUsers(dataURL);
  }, []);
  //empty dependency array for componentDidMount Method

  return (
    <>
      <table>
        <UserContext.Provider value={{ users, setUsers }}>
          <TableHead />
          <Rows />
        </UserContext.Provider>
        {/* {if (catchError)
        <div id="snackbar">An error occured while fetching the Data</div>
        } */}
        
      </table>
    </>
  );
};
export default SortTable;
