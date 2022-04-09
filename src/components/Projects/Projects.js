import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
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
              title="Discord Activity 24/7"
              description="24/7 Discord Activity That Gets Your Discord Account Online with Twitch Streaming Method"
              link="https://replit.com/@fadev/FarrellID#config.json"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SAMP GameMode Indonesia"
              description="A SAMP Script That Makes GTA Multiplayer with a Roleplay System where you have to play a Character Who is Considered as Human in the World & Act as in the World."
              link="https://mega.nz/file/FxNnVIwZ#FgvhUmYo_zkSZSib_TNxh3h2IgmImnbrkJIUuji29bo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
