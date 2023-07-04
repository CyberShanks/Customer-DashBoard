import { useContext } from "react";
import { UserCountContext } from "../App";

const UserCount = () => {
    const { userCount } = useContext(UserCountContext);
    return (
        <div>
            <h2>Displaying {userCount} Entries</h2>
        </div>
    )
}

export default UserCount;