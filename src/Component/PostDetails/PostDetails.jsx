import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    let navigate = useNavigate();
    let postDetails = useLoaderData();
    let {postId} = useParams();
    let {id,title,body} = postDetails;
    let handleGoBack = () =>{
        navigate(-1)
    }
    console.log(postId);
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