const Rows = ({ users, query }) => {
  let actualQuery = Object.values(query);

  const keys = ["name", "username", "email"];

  users = users.filter(user =>
    keys.some(key => 
      user[key].toLowerCase().includes(actualQuery[0].toLowerCase())
    )
  );
  // users = users.filter(user => user.name.toLowerCase().includes(actualQuery[0].toLowerCase()));

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
