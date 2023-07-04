import { useContext, useState } from "react";
import { UserContext } from "./SortTable";

// Provides Header Rows which Sort the Table using Click Event Listener
const HeaderRows = () => {
  const [order, setOrder] = useState("asc");
  const { users, setUsers } = useContext(UserContext);

  const sorter = (col) => {
    // if name clicked
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

      // if city clicked
    } else if (col === "city") {
      if (order === "asc") {
        const sorted = [...users].sort((a, b) =>
          a["address"]["city"].toLowerCase() >
          b["address"]["city"].toLowerCase()
            ? 1
            : -1
        );
        setUsers(sorted);
        setOrder("dsc");
      } else if (order === "dsc") {
        const sorted = [...users].sort((a, b) =>
          a["address"]["city"].toLowerCase() <
          b["address"]["city"].toLowerCase()
            ? 1
            : -1
        );
        setUsers(sorted);
        setOrder("asc");
      }

      // if id clicked
    } else if (col === "id") {
      if (order === "asc") {
        const sorted = [...users].sort((a, b) => (a["id"] > b["id"] ? 1 : -1));
        setUsers(sorted);
        setOrder("dsc");
      } else if (order === "dsc") {
        const sorted = [...users].sort((a, b) => (a["id"] < b["id"] ? 1 : -1));
        setUsers(sorted);
        setOrder("asc");
      }
    }
  };

  return (
    <thead>
      <tr>
        <th className="sort-table" onClick={() => sorter("id")}>ID</th>
        <th className="sort-table" onClick={() => sorter("name")}>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th className="sort-table" onClick={() => sorter("city")}>City</th>
        <th>Company</th>
      </tr>
    </thead>
  );
};

export default HeaderRows;
