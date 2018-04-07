import React from "react";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from "react-router";

const Header = () => (
    <div>
        <Navbar color="dark" dark expand="md">
            <Link to="/" className="navbar-brand">Demo ReactJS</Link>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/students" className="nav-link">Students</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)

export default Header;