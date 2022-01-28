import { Navbar, Nav } from 'rsuite';
import { NavLink } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import {
FaHome as FaHomeIcon,
FaCode as FaCodeIcon
} from 'react-icons/fa';

// const handleLogout = () => {
//     setCurrentUser(null);
//     fetch("/logout", { method: "DELETE" });
//     };

const NavBar = ({ currentUser, handleLogout }) => {
return (
    <Navbar className="NavBar" style={{background: '#5683eb'}}>
    <Navbar.Brand style={{ color: 'black'}}>
        Welcome {currentUser} 🎶 🎹 🎧 <button onClick={handleLogout} box-shadow='6px 6px 12px rgba(0,0,0,0.8), -6px -6px 12px rgba(255, 254, 254, 0.4)' color="black" fontSize="large" position="left">Logout</button>
    </Navbar.Brand>
    <Nav>
        <Nav.Item as={NavLink} to="/" icon={<FaHomeIcon />} size="2em" style={{ color: '#010000'}}>Home</Nav.Item>
    <Nav.Item as={NavLink} to="/videoplayer" style={{ color: '#010000'}}>Artist To Watch</Nav.Item>

    
    </Nav>

    </Navbar>
);
}

export default NavBar;



