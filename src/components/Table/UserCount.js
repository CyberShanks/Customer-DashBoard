import { useContext } from "react";
import { UserCountContext } from "./Table";

// Displays Total Users fetched using userCount Context
const UserCount = () => {
    const { userCount } = useContext(UserCountContext);
    return (
        <div>
            <h2 id="count-msg">Displaying <span id="count">{userCount}</span> Entries</h2>
        </div>
    )
}

export default UserCount;