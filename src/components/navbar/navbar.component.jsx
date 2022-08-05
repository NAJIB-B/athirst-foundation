import "./navbar.style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className={navbar ? "active" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="#"  className={navbar ? "activeLogo" : "logo"}>
            ATHIRST FOUNDATION.ORG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className={navbar ? "activeNavLink" : "navLink"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className={navbar ? " activeNavLink" : "navLink"}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#action1"
                className={navbar ? " activeNavLink" : "navLink"}
              >
                Photo Gallery
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className={navbar ? " activeNavLink" : "navLink"}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
