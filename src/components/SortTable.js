import { createContext, useEffect, useState } from "react";
import Rows from "./Rows";
import HeaderRows from "./TableHeader";

export const UserContext = createContext(null);

const SortTable = ({ dataURL }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.log(e);
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
          <HeaderRows />
          <Rows />
        </UserContext.Provider>
      </table>
    </>
  );
};
export default SortTable;
