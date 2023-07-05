import get from "lodash.get";

export const rows = [
    { accessor: "id", name: "ID", sortable: true },
    { accessor: "name", name: "Name", sortable: true },
    { accessor: "username", name: "Username", sortable: false },
    { accessor: "email", name: "Email", sortable: false },
    { accessor: "address.city", name: "City", sortable: true },
    { accessor: "company.name", name: "Company", sortable: false },
  ];

  
  /**
 * The function `getUserSortByKey` is a higher-order function that returns a comparator function for
 * sorting an array of objects based on a specified key and order.
 * @param accessor - The `accessor` parameter is a function or a string that specifies the property or
 * key to access in the user objects. It can be a dot-separated string to access nested properties. For
 * example, if the user objects have a property called "name" and you want to sort by name, you
 * @param nextOrder - The `nextOrder` parameter is a string that specifies the sorting order. It can
 * have two possible values: "asc" for ascending order and "desc" for descending order.
 * @returns The function `getUserSortByKey` is returning a new function that takes two parameters
 * `user1` and `user2`.
 */
export const getUserSortByKey = (accessor, nextOrder) => {
  return (user1, user2) => {
    const value1 = get(user1, accessor);
    const value2 = get(user2, accessor);
    if (!value1 || !value2) {
      return 0;
    }
    if (typeof value1 === "string" && typeof value2 === "string") {
      return nextOrder === "asc"
        ? value1.localeCompare(value2)
        : value2.localeCompare(value1);
    }
    return nextOrder === "asc" ? value1 - value2 : value2 - value1;
  };
};