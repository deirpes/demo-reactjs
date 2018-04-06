import React from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from "react-router";

const Header = () => (
    <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Demo ReactJS</NavbarBrand>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-link">About</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)

export default Header;