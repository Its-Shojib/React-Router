import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Home = () => {
    return (
        <div className="text-center">
            <Header></Header>
            <p>This is Home</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;