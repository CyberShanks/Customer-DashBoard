import { useContext } from "react";
import { QueryContext } from "../App";
import { UserContext } from "./SortTable";

const Rows = () => {

  let { query } = useContext(QueryContext);
  let { users } = useContext(UserContext);
  // search functionality
  const keys = [
    "name",
    "username",
    "email",
    ["address", "city"],
    ["company", "name"],
  ];

  users = users.filter((user) =>
    keys.some((key) =>
      typeof key === "string"
        ? user[key].toLowerCase().includes(query.toLowerCase())
        : user[key[0]][key[1]].toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <tbody>
      {users.map((currentUser) => {
        const { id, name, username, email, address, company } = currentUser;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{address.city}</td>
            <td>{company.name}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
