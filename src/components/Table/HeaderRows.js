import { useContext, useState, useRef } from "react";
import { UserContext } from "./SortTable";
import upArrowIcon from "./assets/arrow_upward_black_24dp.svg";
import downArrowIcon from "./assets/south_black_24dp.svg";




import get from "lodash.get";



import { rows } from "./constants";

const iconMap = {
  asc: upArrowIcon,
  dsc: downArrowIcon
} 

// Provides Header Rows which Sort the Table using Click Event Listener
const HeaderRows = () => {
  const [order, setOrder] = useState("asc");
  const { users, setUsers } = useContext(UserContext);

  const activeSorting = useRef('id');
  const rowSortedOrder = useRef(rows.map((row) => [row.accessor, 'asc']));

  const sort = (row) => {
    const nextUsers = [...users];
    const nextOrder = order === "asc" ? "dsc" : "asc";

    activeSorting.current = row.accessor
    rowSortedOrder[row.accessor] = nextOrder;

    nextUsers.sort((user1, user2) => {
      const value1 = get(user1, row.accessor);
      const value2 = get(user2, row.accessor);
      if (!value1 || !value2) {
        return 0;
      }
      if (typeof value1 === "string" && typeof value2 === "string") {
        return nextOrder === "asc"
          ? value1.localeCompare(value2)
          : value2.localeCompare(value1);
      }
      return nextOrder === "asc" ? value1 - value2 : value2 - value1;
    });
    setUsers(nextUsers);
    setOrder(nextOrder);
  };

  const handleClick = (item) => {
    if (item.sortable) {
      sort(item);
    }
  };

  return (
    <thead>
      <tr>
        {rows.map((row) => {
          let sortIndicatorJSX = null;
          if (row.sortable) {
            sortIndicatorJSX = <img className="arrow" src={iconMap[rowSortedOrder[row.accessor]]} alt="" />;
          }
          return (
            <th
              key={row.accessor}
              className={`sort-table ${
                activeSorting.current === row.accessor ? "sorting" : ""
              }`}
              onClick={() => handleClick(row)}
            >
              {row.name}
              {sortIndicatorJSX}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default HeaderRows;
