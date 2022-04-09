import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";

function About() {
  return (
      <>
      <Container className="about" fluid="lg">
          <Col sm={4} className="p-5">
            <Image
              fluid
              roundedCircle
              className="image"
              src={require(`../assets/img/me.jpg`)}
              alt="Braxton Hotton"
            />
          <Image
              fluid
              roundedCircle
              className="image"
              src={require(`../assets/img/family.jpg`)}
              alt="Braxton Hotton"
            />
          </Col>
        <Col sm={8} className="p-5 mb-5">
          <h1>Hello!</h1>
          <hr></hr>
            <p>
              My name is Braxton Hotton and I'm from West Jordan, UT!<br></br> I love to code, game, work together in teams,
              and so much more! Here are some of the stuff I know how to code!
            </p>
            <p>
              HTML
              <br></br>
              CSS
              <br></br>
              JS
              <br></br>
              Node.js
              <br></br>
              React
              <br></br>
              Git
              <br></br>
              And all of the Full-Stack in between!
            </p>
            <a href="https://drive.google.com/file/d/1BUkPOHsT9GldYKSD1nKilvctBW_7YSLx/view?usp=sharing" target="_blank">Click here to see my Resume!</a>
        </Col>
    </Container>
    </>
  );
}

export default About;
