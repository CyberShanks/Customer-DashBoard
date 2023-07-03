const Rows = ({ users, query }) => {
  let actualQuery = Object.values(query);

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
        ? user[key].toLowerCase().includes(actualQuery[0].toLowerCase())
        : user[key[0]][key[1]]
            .toLowerCase()
            .includes(actualQuery[0].toLowerCase())
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
