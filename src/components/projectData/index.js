import React, { useState } from "react";
import ModalDiv from "./data.js";
import { Row, Col, Card } from "react-bootstrap";
import "../../App.css";

function Project() {
  
  const [currentProject, setCurrentProject] = useState();

  const projects = [
    {
      name: "Cashing Out of Town",
      caption: "Simple Resturant Finder/Tip Calculator!",
      url: "https://hottiehotton.github.io/CashingOutofTown/",
      github: "https://github.com/HottieHotton/CashingOutofTown",
      description:
        "In this project, me and a few classmates worked together to create this webiste to help others find resturants near the location they were wanting to visit. On top of that, we also created a tip calculator so they won't have to do the math themselves and help their servers get some extra tip!",
    },
    {
      name: "Salty Brook",
      caption: "Making returns easy, one step at a time",
      url: "https://salty-brook-34116.herokuapp.com/",
      github: "https://github.com/HottieHotton/Warehouse-Returns",
      description:
        "This project was started to help alliviate some of the hedaches of processing returns for Davis Distributing Co, a wholesale warehouse that has been in John's family for over 65 years. As a B2B wholesaler of truck equipment, we sell lots of products to repeat reselling customers. Anytime they need to return a product they purchased, it is a headache for everyone involved. Right now its about 4 times the amount of work versus selling them the product but we don't make any money on this work. This app is designed to be a simple, linear step by step style process to help everyone involved, the customer, the warehouse people physically handling the products and the office manager tasked with the paperwork side of things. This app uses lots of different technologies including: HTML, Bulma, CSS, JS, Handlebars.js, Express.js, Heroku, Sequelize.js, MySQL Database.",
    },
    {
      name: "Pards: A Trailer Hitch Company!",
      caption: "A Trailer Hitch company with a smooth e-commerce backend!",
      url: "https://ancient-island-13793.herokuapp.com/",
      github: "https://github.com/johndavis92790/pards-react/tree/develop",
      description:
        "With my previous group, our team member John is apart of Davis Distribution and has a lot of clients. One of them was Pards, and was wanting a brand new webiste, and we stepped in with our group and put together a smooth e-commerce backend allowing the company to load many products at once!",
    }
  ];

  //https://ancient-island-13793.herokuapp.com/
  const ifLiveLink = (project) => {
    if (project.url === '') {
      return (
        <Card.Text>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Live Link
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </Card.Text>
      );
    }
  }

  return (
    <>
      {currentProject ? (
        <ModalDiv
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        />
      ) : null}
      <div className="pb-4">
        {projects.map((project, i) => {
          if (i === 0 || i % 2 === 0) {
            return (
              <Row
                key={project.name + "-project"}
                xs={1}
                sm={2}
                className="g-0 mx-3 mt-1"
              >
                <Col className="mx-0 my-4 project">
                  <Card>
                    <Card.Img
                      variant="top"
                      className="project"
                      src={require(`../../assets/img/${i}.jpg`)}
                      alt={project.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...project, index: i });
                      }}
                    />
                  </Card>
                </Col>
                <Col className="my-auto px-3">
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.caption}</Card.Text>
                      {ifLiveLink(project)}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row key={project.name} xs={1} sm={2} className="g-0 mx-3 mt-1">
                <Col
                  className="my-auto px-3 image"
                  xs={{ order: "last" }}
                  sm={{ order: "first" }}
                >
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.caption}</Card.Text>
                      {ifLiveLink(project)}
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mx-0 my-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      className="project"
                      src={require(`../../assets/img/${i}.jpg`)}
                      alt={project.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...project, index: i });
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            );
          }
        })}
      </div>
    </>
  );
}

export default Project;