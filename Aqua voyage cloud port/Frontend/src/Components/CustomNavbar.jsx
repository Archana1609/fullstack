
/*import { Nav, Navbar } from "rsuite";

import { Link } from "react-router-dom";

const CustomNavbar = () => {
    const navbarStyle = {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    };
    return (
        <Navbar style={navbarStyle}>
            <Navbar.Brand href="#">AquaVoyage Cloudport</Navbar.Brand>
            <Nav>
                <Nav.Item ><Link to={'/home'}>Home</Link></Nav.Item>
                <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
                <Nav.Item><Link to={'/pay'}>Payment</Link></Nav.Item>
                <Nav.Item><Link to={'/user'}>User</Link></Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item><Link to={'/ad'}>Admin</Link></Nav.Item>
                 <Nav.Item><Link to={'/logout'}>Log Out</Link></Nav.Item> 
                
            </Nav>
        </Navbar>
    );
}

export default CustomNavbar;
*/
import { Nav, Navbar } from "rsuite";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    const navbarStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent color
        boxShadow: 'none',
    };

    return (
        <Navbar style={navbarStyle}>
            <Navbar.Brand href="#">AquaVoyage Cloudport</Navbar.Brand>
            <Nav>
                <Nav.Item ><Link to={'/home'}>Home</Link></Nav.Item>
                <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
                <Nav.Item><Link to={'/pay'}>Payment</Link></Nav.Item>
                <Nav.Item><Link to={'/user'}>User</Link></Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item><Link to={'/ad'}>Admin</Link></Nav.Item>
                <Nav.Item><Link to={'/logout'}>Log Out</Link></Nav.Item>
                {/* <Nav.Item><Link to={'/reg'}>Signup</Link></Nav.Item> */}
            </Nav>
        </Navbar>
    );
}

export default CustomNavbar;

