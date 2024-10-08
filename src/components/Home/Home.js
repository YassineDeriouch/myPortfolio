import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import DownloadCV from "./downloadCV";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";

function Home() {
  return (
      <section>
        <Container fluid className="home-about-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello stranger!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="purple"> Yassine Deriouch</strong>
                </h1>

                <div className="purple" style={{ padding: 50, textAlign: "left" }} >
                  <Type />
                </div>
                <div style={{
                  padding: 50,
                  textAlign: "left",
                  zIndex: 1,
                  position: "relative",
                }}
                >
                  <DownloadCV/>
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                  {ageUpdater()} years old Moroccan Java Fullstack developer
                  and software engineering student at
                  the International University of Rabat,
                  software development and tech enthusiast.
                  <br />
                  <br />I am fluent in technologies like
                  <i>
                    <b className="purple"> Java, Spring Boot, Angular, SQL etc. </b>
                  </i>
                  <br />
                  <br />
                  My field of interests are making new &nbsp;
                  <i>
                    <b className="purple">software technologies and features </b> and
                    also in areas related to{" "}
                    <b className="purple">
                      game industry.
                    </b>
                  </i>
                  <br />
                  <br />
                  Usually I spend my time discovering new technologies and building apps with  <b className="purple">Java </b>
                  and <b className="purple">nodeJS</b> with their
                  <i>
                    <b className="purple">
                      {" "}
                      modern Frameworks and tools
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> Spring Boot, </b>
                    <b className="purple"> Angular, </b>
                    <b className="purple"> Android java </b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                        href="https://github.com/YassineDeriouch"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/yassine-deriouch-036898125/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
  );
}

function ageUpdater() {
  let bdayDate = new Date("2000/03/17");
  let currentDate = new Date();

  let age = currentDate.getFullYear() - bdayDate.getFullYear();
  let monthDiff = currentDate.getMonth() - bdayDate.getMonth();
  let dayDiff = currentDate.getDate() - bdayDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  console.log("age: " + age);
  return age;
}



export default Home;
