import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

function Navigation() {

  return (
    <Navbar expand="lg">
      <Container className="navbar">
        <Navbar.Brand as={Link} to="/">
          <span style={{ cursor: "pointer" }} className="navTextName mx-3">
            Braxton Hotton
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              <span className="navText mx-3">About Me</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <span className="navText mx-3">Contact</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <span className="navText mx-3">Projects</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;