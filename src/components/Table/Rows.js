import { useContext, useEffect } from "react";
import { QueryContext, UserCountContext } from "./Table";
import { UserContext } from "./SortTable";
import { rows } from "./constants";
import get from "lodash.get";

// Filters Users based on the Search Query and sets the UserCount
const Rows = () => {

  const { query } = useContext(QueryContext);
  let { users } = useContext(UserContext);
  const { setUserCount } = useContext(UserCountContext);

  const keys = [
    "name",
    "username",
    "email",
    ["address", "city"],
    ["company", "name"],
  ];

/* Filters the `users` array based on the `query` value. It uses the `filter` method to
iterate over each user in the `users` array. */
  users = users.filter((user) =>
    keys.some((key) =>
      typeof key === "string"
        ? user[key].toLowerCase().includes(query.toLowerCase())
        : user[key[0]][key[1]].toLowerCase().includes(query.toLowerCase())
    )
  );

  // Setting the user count
  useEffect(() => {
    setUserCount(users.length);
  }, [users]);

  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            {rows.map(row => 
              <td key={row.accessor}>
                {get(user, row.accessor)}
              </td>)}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
