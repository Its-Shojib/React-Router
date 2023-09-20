import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    let navigate = useNavigate();
    let postDetails = useLoaderData();
    let {id,title,body} = postDetails;
    let handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Post id: {id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;