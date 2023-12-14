import React from "react";
import Card from "react-bootstrap/Card";
import {IoGameControllerOutline, IoSearch} from "react-icons/io5";
import {LuPlaneTakeoff} from "react-icons/lu";
import {HiOutlinePaintBrush} from "react-icons/hi2";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"><b>Yassine Deriouch</b> </span>
            from <span className="purple"> <b>Rabat, MOROCCO, </b></span>
             a passionate software engineer 💻 at the
            <span><b className="uir">  Internationale University of Rabat .</b></span>
            <br />
            <br />
            As part of my goals, I'm focusing on enhancing my programming skills in Backend technologies
            such as <span className="purple"> <b>java/JEE </b></span>
            and it's frameworks as well as frontend technologies including <span className="purple"> <b>Angular </b></span>
            and <span className="purple"> <b>Bootstrap</b></span>.
            Additionally, I am actively trying to improve my soft skills and communication .
            <br />
            <br />
            Other than coding, I love to
          </p>
          <ul>
            <li className="about-activity">
              <IoSearch /> Discover and learn new stuff
            </li>
            <li className="about-activity">
              <IoGameControllerOutline /> Play video games
            </li>
            <li className="about-activity">
              <HiOutlinePaintBrush /> Graffiti and Art
            </li>
            <li className="about-activity">
              <LuPlaneTakeoff /> Travel
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
