import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "../App.css";

function Home(){
    return(
        <Container fluid="md" className="my-5">
      <Row>
        <Col sm={8} className="p-5 mb-5">
          <h1>Welcome to my Portfolio!(WIP)</h1>
          <hr></hr>
          <div>
            <p>
              From HTML,<br></br>CSS,<br></br>and JS,<br></br>
              this portfolio has everything<br></br>you need to know about who I am and how I code!
            </p>
            <p>
                I hope you are able to enjoy the content and if you want to work together,
                <br></br>
                You can reach me with the links below,
                <br></br>
                and in the Contact Me section!
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;