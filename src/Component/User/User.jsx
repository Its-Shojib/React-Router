import { Link } from "react-router-dom";


const User = ({user}) => {
    let {id,email,name,phone,website} = user;
    let userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>{website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;