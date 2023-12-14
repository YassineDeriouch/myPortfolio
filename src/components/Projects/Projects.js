import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optimgov from "../../Assets/Projects/optimgov.png";
import sms from "../../Assets/Projects/student-management-system.png";
import store from "../../Assets/Projects/store.PNG";
import ClubsImg from "../../Assets/Projects/ClubsImg.png";
import ML from "../../Assets/Projects/Restaurant-Revenue-Prediction.png";
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
              imgPath={ClubsImg}
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
              imgPath={store}
              isBlog={false}
              title="E-commerce shopping store"
              description="Online E-commerce desktop application made to buy and sell products with tools
              to manages products, purchases and customers. This desktop application is made using Java with Swing library for GUI
              and MySQL DB"
              ghLink="https://github.com/YassineDeriouch/Gestion-Achat-Vente"
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
              imgPath={optimgov}
              isBlog={false}
              title="GSM fleet and LAN connections system"
              description="GSM fleet and LAN connections management system is an online web app module part of the inernal system of
              Marrakech municipality, made in order to manage GSM fleet and LAN internet connections, monitor and manage operator invoices
               and annual subscriptions by building an invoicing system as well as a small connection lines configuration and
               parameterization system. Built using Spring-Boot, Hibernate/JPA and SQL Server for the backend REST API and
               Angular with Material for Frontend side."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="Students management system"
              description="This project has been made to manage students, built using Java's framework Struts2
               and Hibernate ORM framework for data persistance with MySQL relational DB; As well as JSP and JSTL
               with Bootstrap for the client side."
              ghLink="https://github.com/YassineDeriouch/Gestion_etudiants"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Restaurant Revenue Prediction"
              description=" Restaurant revenue prediction project using various Machine Learning models
              to predict annual restaurant sales based on objective measurements made using jupyter notebook with python
               ML models used : Linear Regression, KNN, Random Forest, LDA, SVM, Decision Tree, Naive Bayes, and Clustering."
              ghLink="https://github.com/YassineDeriouch/Restaurant-Revenue-Prediction"
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
