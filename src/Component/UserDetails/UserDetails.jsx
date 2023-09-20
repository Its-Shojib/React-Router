import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    let user = useLoaderData();
    let {name,website,phone,email} = user;
    return (
        <div>
            <h3>Details About User</h3>
            <h4>Name: {name}</h4>
            <h4>Phone: {phone}</h4>
            <h5>Email: {email}</h5>
            <h5>Website: {website}</h5>
        </div>
    );
};

export default UserDetails;