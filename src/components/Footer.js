import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Container>
      <Navbar fixed="bottom" expand="lg">
        <Container>
          <Navbar.Brand className="m-auto" id="footer">
            <a
              className="m-3 icons"
              href="https://github.com/HottieHotton"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={50} />
            </a>
            <a
              className="m-3 icons"
              href="https://www.linkedin.com/in/braxton-hotton-4011b9149/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={50} />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;