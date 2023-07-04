import { useEffect, useState } from "react";
import Rows from "./Rows";
import HeaderRows from "./TableHeader";

const dataApi = "https://jsonplaceholder.typicode.com/users";

const SortTable = () => {

  const [users, setUsers] = useState([]);

  const updateSetUsers = (state) => {
    setUsers(state);
  };

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
    fetchUsers(dataApi);
  }, []);

  //empty dependency array for componentDidMount Method
  return (
    <>
      <table>
        <HeaderRows triggerUpdate={updateSetUsers} users={users} />
        <Rows users={users}/>
      </table>
    </>
  );
};
export default SortTable;
