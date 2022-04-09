import React from "react";
import { Container } from "react-bootstrap";
import Project from "./projectData/index.js";

const Work = () => {
  return (
    <Container fluid="md" className="mb-5">
      <h1 id="portfolio" className="mt-5">
        My Projects
      </h1>
      <Project></Project>
    </Container>
  )
}

export default Work