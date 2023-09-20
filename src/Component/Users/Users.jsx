import { useLoaderData } from "react-router-dom";


const Users = () => {
    let users = useLoaderData();
    return (
        <div>
            <p>This is Users</p>
            <p>Our User: {users.length}</p>
        </div>
    );
};

export default Users;