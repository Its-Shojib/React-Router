import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    let error = useRouteError();
    let navigate = useNavigate();
    let handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Oopps!!!</h1>
            <p>404 Page not found!</p>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Page not found</p>
                    <button onClick={handleGoBack}>Go Back</button>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;