import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optimgov from "../../Assets/Projects/optimgov.png";
import moviesLib from "../../Assets/Projects/moviesLibrary.PNG";
import store from "../../Assets/Projects/store.PNG";
import clubUIR from "../../Assets/Projects/clubUIR.png";
import devstuff from "../../Assets/Projects/devstuff logo.png";
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
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubUIR}
              isBlog={false}
              title="Clubs UIR"
              description="Clubs UIR is an online plateform dedicated to manage university clubs allowing students to create and join
               clubs and administrations staff to manage clubs and membres;
               made using Spring Boot, MySQL DB for backend and Angular, Bootstrap for frontend"
              ghLink="https://github.com/YassineDeriouch/ClubsUIR_API"
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
               Angular with Material for Frontend client."
              ghLink="https://github.com/YassineDeriouch/gestion_GSM_LAN_2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesLib}
              isBlog={false}
              title="Movies Library"
              description="Movies library project display movies titles and their informations,
               classified by different categories and imported from IMBD dataset.
               Provides a secure admin panel with JWT login system, to dynamically manage and import new movies through csv files.
               Made using Java with Spring Boot, MySQL RDBMS and Angular with Bootstrap as a UI framework. "
              ghLink="https://github.com/YassineDeriouch/MoviesLibrary_API_V1/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={devstuff}
              isBlog={false}
              title="devStuff Project"
              description="devStuff project is web based platform that aims to share developement related tools that could be usefull
              for developers, for ease of navigation, each tool is classified by one or many categories.
              The app offers administration and moderation space for dynamic management,
               as well as a regular user can join the moderation staff to contribute with the team.
               The login system is powered by JWT authorization, as well as it will be accessible via social media provider like
               google, github and facebook. Moreover the app will have more amazing features as it is still in developement phase.
               Backend Techstack: Spring Boot and PostgreSQL."
              ghLink="https://github.com/YassineDeriouch/devStuff"
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
