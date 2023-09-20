import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </nav>
        </div>
    );
};

export default Header;