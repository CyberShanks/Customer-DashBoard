const UserData = ({ users }) => {
  return (
    <>
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
    </>
  );
};

export default UserData;
