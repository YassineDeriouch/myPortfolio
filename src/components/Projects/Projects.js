import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import store from "../../Assets/Projects/store.PNG";
import clubs from "../../Assets/Projects/clubs.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import stage from "../../Assets/Projects/stage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubs}
              isBlog={false}
              title="Clubs UIR"
              description="Clubs UIR an online plateform dedicated to manage university clubs allowing students to create and join
               clubs and administrations staff to manage clubs and membres;
               made using Spring Boot, MySQL DB for backend and Angular, Bootstrap for frontend"
              ghLink="https://github.com/YassineDeriouch/Gestion-Clubs-UIR-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stage}
              isBlog={false}
              title="Stages UIR"
              description="Stages UIR is an Android mobile application made as a project for the university to manage students internships,
              built using Spring Boot and MySQL for backend and Android client with retrofit2 using java for android "
              ghLink="https://github.com/YassineDeriouch/gestion-Stages-Android"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Shopping store"
              description="Online E-commerce desktop application made to buy and sell products with tools
              to manages products, purchases and customers. This desktop application is made using Java with Swing library for GUI
              and MySQL DB"
              ghLink="https://github.com/YassineDeriouch/Gestion-Achat-Vente"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
