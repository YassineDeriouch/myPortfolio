import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiWindows,
    SiLinux,
    SiIntellijidea,
    SiSwagger,
    SiApachetomcat,
    SiGradle,
    SiApachemaven,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiGradle />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col>
    </Row>
  );
}

export default Toolstack;
