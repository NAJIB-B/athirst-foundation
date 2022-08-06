import "./navbar.style.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faHeart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" fixed="top" className="active">
        <Navbar.Brand className="logoMargin">
          <Link smooth to="/#home" className="activeLogo">
            <FontAwesomeIcon icon={faHeart} className="logoImg" />
            ATHIRST FOUNDATION.ORG
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="togglerBorder">
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
              <Link smooth to="/#home" className="activeNavLink">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link smooth to="/#aboutUs" className="activeNavLink">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link smooth to="/#gallery" className="activeNavLink">
                Photo Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link smooth to="/#contact" className="activeNavLink">
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
