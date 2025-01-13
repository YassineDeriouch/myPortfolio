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
import gsf from "../../Assets/Projects/gsf.png"

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
              imgPath={store}
              isBlog={false}
              title="E-commerce shopping store"
              description="Online E-commerce desktop application made to buy and sell products with tools
              to manages products, purchases and customers. This desktop application is made using Java with Swing library for GUI
              and MySQL DB"
              ghLink="https://github.com/YassineDeriouch/Gestion-Achat-Vente"
              techStackValues={["Java", "MySQL", "Maven"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={stage}
                isBlog={false}
                title="Stages UIR"
                description="Stages UIR is an Android mobile application made as a project for the university to manage students internships,
              built using Spring Boot and MySQL for backend to expose REST APIs to the Android client with retrofit2 using java for android "
                ghLink="https://github.com/YassineDeriouch/gestion-Stages-Android"
                techStackValues={["Java", "Spring","MySQL", "Android", "Gradle"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={clubUIR}
                isBlog={false}
                title="Clubs UIR"
                description="Clubs UIR is an online plateform dedicated to manage university clubs allowing students to create and join
               clubs and administrations staff to manage clubs and membres;
               made using Spring Boot, MySQL DB for backend and Angular, Bootstrap for frontend"
                ghLink="https://github.com/YassineDeriouch/ClubsUIR_API"
                techStackValues={["Java", "Spring", 'TypeScript', "Angular", "MySQL", "Bootstrap", "Maven"]}
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
               parameterization system. Built using Spring-Boot, Hibernate/JPA and SQL Server for the backend & exposing REST APIs and
               Angular with Material for Frontend client."
              ghLink="https://github.com/YassineDeriouch/gestion_GSM_LAN_2"
              techStackValues={["Java", "Spring", 'TypeScript', "Angular", "SQLServer", "AngularMaterial", "Maven"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsf}
              isBlog={false}
              title="GSF - Generative Skills Factory"
              description="GSF is a mid-sized web-based project and my graduation project, designed as a solution to streamline
               the management and monitoring of consultants' skills. It replaces the traditional reliance on Excel spreadsheets,
                offering a more efficient and structured approach to tracking expertise, certifications, and career progress.
                The platform enhances data accessibility, ensures consistency, and provides valuable insights through interactive
                dashboards and reporting features. Built using Spring-Boot, Hibernate/JPA and MySQL for the backend & exposing REST APIs and
               Angular with Material for Frontend client. "
              ghLink="https://github.com/YassineDeriouch/MoviesLibrary_API_V1/"
              techStackValues={["Java", "Spring", 'TypeScript',"MySQL", "Angular", "PrimeNG", "Maven"]}

            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={devstuff}
              isBlog={false}
              title="devStuff Project"
              description="devStuff project is an active side project as web based platform that aims to provide a large library of
              developement related tools that could be usefull for developers.
              The app offers a large choice of classification and filters for ease of navigation
              as well as administration and moderation dashboards for dynamic management and monitoring.
              Moreover the app will have more amazing features as it is still under developement.
              The app is being built using Spring Boot with Maven and PostgreSQL for the Backend and exposing REST APIs, along with
              Vue 3 with Typescript, TailwindCSS, PrimeVue for the Frontend."
              techStackValues={["Java", "Spring", 'TypeScript', "Vue", "PostgreSQL", "PrimeVue","TailwindCSS", "Maven"]}
              ghLink="https://github.com/YassineDeriouch/devStuff"
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
