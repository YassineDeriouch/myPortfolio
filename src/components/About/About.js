import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import '@dotlottie/player-component'; // Import the component

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">More</strong> About Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
              <dotlottie-player
                  src="https://lottie.host/3d483f90-5c14-491f-a2f8-25d71524ce19/O3DKrv7hU8.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '550px', height: '550px',marginTop: '-100px' }}
                  loop
                  autoplay
                  className="img-fluid"  // Correct the way className is applied
              ></dotlottie-player>

          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
