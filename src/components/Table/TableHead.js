import { useContext, useState, useRef } from "react";
import { UserContext } from "./SortTable";
import upArrowIcon from "./assets/icons/arrow_upward_black_24dp.svg";
import downArrowIcon from "./assets/icons/south_black_24dp.svg";
import { rows, getUserSortByKey } from "./constants";

const iconMap = {
  asc: upArrowIcon,
  dsc: downArrowIcon,
};


// Provides Header Rows which Sort the Table using Click Event Listener
const TableHead = () => {
  const [order, setOrder] = useState("asc");
  const { users, setUsers } = useContext(UserContext);

  const activeSorting = useRef("id");
  const rowSortedOrder = useRef(rows.map((row) => [row.accessor, "asc"]));

/**
 * The function sorts an array of users based on a specified row and toggles the sorting order.
 * @param row - The `row` parameter represents the row or column that is being sorted. It is an object
 * that contains information about the row, such as its accessor (a key used to access the value in
 * each user object) and other properties.
 */
  const sort = (row) => {
    const nextUsers = [...users];
    const nextOrder = order === "asc" ? "dsc" : "asc";

    activeSorting.current = row.accessor;
    rowSortedOrder[row.accessor] = nextOrder;

    nextUsers.sort(getUserSortByKey(row.accessor, nextOrder));

    setUsers(nextUsers);
    setOrder(nextOrder);
  };

  const handleSortClick = (item) => {
    if (item.sortable) {
      sort(item);
    }
  };

  return (
    <thead>
      <tr>
        {rows.map((row) => {
          // TODO create a Table Head <Th> Component

          let sortIndicatorJSX = null;

          if (row.sortable) {
            sortIndicatorJSX = (
              <img
                className="arrow"
                src={iconMap[rowSortedOrder[row.accessor]]}
                alt=""
              />
            );
          }

          return (
            <th
              key={row.accessor}
              className={`sort-table ${
                activeSorting.current === row.accessor ? "sorting" : ""
              }`}
              onClick={() => handleSortClick(row)}
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

export default TableHead;
