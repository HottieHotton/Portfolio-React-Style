import React from "react";
import { Container, Row, Col } from "react-bootstrap"

function Home(){
    return(
        <Container fluid="md" className="my-5">
      <Row className="align-items-center">
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">About Me</h1>
          <div>
            <p>
              My love of technology might trace back to my high school Java
              class or the time I built my first computer at age 12. After
              helping my family business achieve its highest revenues ever and
              successfully sell to new ownership, I look forward to joining an
              industry well-suited to my ideas, resourcefulness, and technical
              skills.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;