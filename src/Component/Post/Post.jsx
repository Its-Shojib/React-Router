import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    let { id, title} = post;
    let navigate = useNavigate();
    let userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px'
    }
    let handleShowDetails = () => {
        navigate(`/post/${id}`);

    }
    return (
        <div style={userStyle}>
            <h2>Post of id: {id}</h2>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`}>Details</Link> */}
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;