import { useEffect, useState } from "react";
import UserData from "./UserData";

const dataApi = "https://jsonplaceholder.typicode.com/users";

const SortTable = () => {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("asc");
  const sorter = (col) => {
    if (col === "name") {
      if (order === "asc") {
        const sorted = [...users].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setUsers(sorted);
        setOrder("dsc");
      } else if (order === "dsc") {
        const sorted = [...users].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setUsers(sorted);
        setOrder("asc");
      }
    }

    else if (col === "city") {
        if (order === "asc") {
          const sorted = [...users].sort((a, b) =>
            a["address"]["city"].toLowerCase() > b["address"]["city"].toLowerCase() ? 1 : -1
          );
          setUsers(sorted);
          setOrder("dsc");
        } else if (order === "dsc") {
          const sorted = [...users].sort((a, b) => 

            a["address"]["city"].toLowerCase() < b["address"]["city"].toLowerCase() ? 1 : -1
          );
          setUsers(sorted);
          setOrder("asc");
        }
      }



     else if (col === "id") {
        if (order === "asc") {
          const sorted = [...users].sort((a, b) =>
            a["id"] > b["id"] ? 1 : -1
          );
          setUsers(sorted);
          setOrder("dsc");
        } else if (order === "dsc") {
          const sorted = [...users].sort((a, b) =>
            a["id"] < b["id"] ? 1 : -1
          );
          setUsers(sorted);
          setOrder("asc");
        }
      }
  };
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
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
        <thead>
          <tr>
            <th onClick={() => sorter("id")}>ID</th>
            <th onClick={() => sorter("name")}>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th onClick={() => sorter("city")}>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};
export default SortTable;
