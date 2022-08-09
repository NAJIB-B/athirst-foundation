import "./navbar.style.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faHeart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expand="md" fixed="top" className="active" expanded={expanded}>
        <Navbar.Brand className="logoMargin">
          <Link smooth to="/#home" className="activeLogo">
            <FontAwesomeIcon icon={faHeart} className="logoImg" />
            ATHIRST FOUNDATION.ORG
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="navbarScroll"
          className="togglerBorder"
        >
          {" "}
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="activeTogglerIcon me-4"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2   navMargin"
            style={{ maxHeight: "180px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link
                smooth
                to="/#home"
                className="activeNavLink"
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                smooth
                to="/#aboutUs"
                className="activeNavLink"
                onClick={() => setExpanded(false)}
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                smooth
                to="/#gallery"
                className="activeNavLink"
                onClick={() => setExpanded(false)}
              >
                Photo Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                smooth
                to="/#contact"
                className="activeNavLink"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
