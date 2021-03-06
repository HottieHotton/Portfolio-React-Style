import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../App.css";

const ModalDiv = ({ setCurrentProject, currentProject }) => {
  
  const ifLiveLink = (project) => {
    if (project.url === "") {
      return (
        <span className="px-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </span>
      );
    } else {
      return (
        <span className="px-5">
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
        </span>
      );
    }
  };

  return (
    <>
      <Modal
        show={true}
        onHide={() => setCurrentProject(null)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {currentProject.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="project"
            src={require(`../../assets/img/${currentProject.index}.jpg`)}
            alt={currentProject.name}
          />
          <p className="p-5">{currentProject.description}</p>
          {ifLiveLink(currentProject)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setCurrentProject(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDiv;