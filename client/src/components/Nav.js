import React from 'react';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Puzzles from './Puzzles.js';

function Navigation() {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">The Hunt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/puzzles" component={Puzzles}>Puzzles</Nav.Link>
                        <Nav.Link href="/workshop">Workshop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/deets">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default Navigation;