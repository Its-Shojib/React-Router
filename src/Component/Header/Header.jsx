import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="text-center">
            <h2>this is Header</h2>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/users'>Users</Link>
        </div>
    );
};

export default Header;