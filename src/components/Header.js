import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = ()=>(
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Tienda Virtual Street 41</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nab"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/Productos">Productos</Nav.Link>
                <Nav.Link href="/Carrito">Carrito</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;