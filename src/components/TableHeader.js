import { useState } from "react";

const HeaderRows = ({ triggerUpdate, users }) => {
    const [order, setOrder] = useState("asc");

    const sorter = (col) => {
        if (col === "name") {
          if (order === "asc") {
            const sorted = [...users].sort((a, b) =>
              a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            triggerUpdate(sorted);
            setOrder("dsc");
          } else if (order === "dsc") {
            const sorted = [...users].sort((a, b) =>
              a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            triggerUpdate(sorted);
            setOrder("asc");
          }
        }
    
        else if (col === "city") {
            if (order === "asc") {
              const sorted = [...users].sort((a, b) =>
                a["address"]["city"].toLowerCase() > b["address"]["city"].toLowerCase() ? 1 : -1
              );
              triggerUpdate(sorted);
              setOrder("dsc");
            } else if (order === "dsc") {
              const sorted = [...users].sort((a, b) => 
    
                a["address"]["city"].toLowerCase() < b["address"]["city"].toLowerCase() ? 1 : -1
              );
              triggerUpdate(sorted);
              setOrder("asc");
            }
          }
    
    
    
         else if (col === "id") {
            if (order === "asc") {
              const sorted = [...users].sort((a, b) =>
                a["id"] > b["id"] ? 1 : -1
              );
              triggerUpdate(sorted);
              setOrder("dsc");
            } else if (order === "dsc") {
              const sorted = [...users].sort((a, b) =>
                a["id"] < b["id"] ? 1 : -1
              );
              triggerUpdate(sorted);
              setOrder("asc");
            }
          }
      };


    return (
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
    )
}

export default HeaderRows;