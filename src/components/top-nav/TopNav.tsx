import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BiJoystick, BiBasket } from "react-icons/bi";

// yarn add react-bootstrap
const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* Brand: Logo + App Name */}
                <NavLink to="/" className="navbar-brand">
                    <span className="text-muted">Gaming Shop</span>
                    &nbsp;
                    <BiJoystick />
                </NavLink>
                {/* Burger: */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/games/all">Games</NavLink>
                        <NavLink className='nav-link' to="/about">About</NavLink>
                        <NavLink className='nav-link' to="/contact">Contact</NavLink>
                        <NavLink className='nav-link' to="/buying-basket">
                            <BiBasket />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;

