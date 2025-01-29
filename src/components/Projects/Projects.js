import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="F1 Winner Predictor"
              description="This project uses machine learning to predict the winner of Formula 1 races based on historical data. The project includes an API, a web interface, and a machine learning model."
              ghLink="https://github.com/YASHSRIVASTAVA07/F1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Contact Manager 1.0"
              description="Telephone Directory Management Software, made using C++
              Account based system to view, add, modify or delete from a telephone directory. Based on names and the corresponding phone numbers. Contains login and signup options.
              Having an account is required to use the app, sign in or sign up after opening the app to continue. Admin accounts are used to modify the directory. Admin credentials are pre-coded, and cannot be added. Admin username: admin Admin password: root"
              ghLink="https://github.com/YASHSRIVASTAVA07/CONTACT-MANAGER-1.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Face Detector"
              description="The Face Detection System is an AI-powered application that identifies and locates human faces within images or real-time video streams. Using computer vision and deep learning techniques, this system can accurately detect faces, enabling various applications such as security surveillance, biometric authentication, and human-computer interaction."
              ghLink="https://github.com/YASHSRIVASTAVA07/face-detector"          
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
