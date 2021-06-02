import React from "react";
import Flip from "react-reveal/Flip";
import { Navbar, Nav, Image } from "react-bootstrap";
//import { FaRegSun } from "react-icons/fa";

const nav = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="nav__bg"
      fixed="top"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Image src="https://i.ibb.co/rv1k7Kr/logo.png" width="55px" rounded />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Flip bottom>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Flip>
        </Nav>
        <Nav className="ml-auto">
          <Flip bottom>
            <Nav.Link href="tel:661-607-3159" style={{ color: "white" }}>
              +1 (661) 607-3159
            </Nav.Link>
          </Flip>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
