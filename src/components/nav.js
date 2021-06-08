import React from "react";
import Flip from "react-reveal/Flip";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
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
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Flip>
        </Nav>
        <Nav className="ml-auto">
          <Flip bottom>
            <Button
              variant="secondary"
              className="hero__btn"
              size="lg"
              onClick={() =>
                window.open(
                  "https://squareup.com/appointments/book/450201de-da15-4b12-af7a-3cb560acb4be/71M2A87TKC228/services"
                )
              }
            >
              Book Us Today
            </Button>{" "}
          </Flip>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
