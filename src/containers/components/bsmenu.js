import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import React from "react";
function Bsmenu  () {
    return(
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home"><img className="nav-header-image" src="/images/MVNA_Logo_Color.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/user/about">Assosiation</Nav.Link>
                <Nav.Link href="/">MVNA Grant</Nav.Link>
                <Nav.Link href="/">Events & Agenda</Nav.Link>
                <Nav.Link href="/">Partership</Nav.Link>
                <Nav.Link href="/">News & Media</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
                <Nav.Link href="/">Member Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}
export default Bsmenu