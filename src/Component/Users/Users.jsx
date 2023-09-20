import { useLoaderData } from "react-router-dom";


const Users = () => {
    let users = useLoaderData();
    return (
        <div>
            <h2>This is Users</h2>
            <p>Our User: {users.length}</p>
        </div>
    );
};

export default Users;