import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiNodejs,
    DiMongodb,
    DiGit,
    DiJava,
    DiAngularSimple,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiAndroid,
    DiMysql,
    DiMsqlServer
} from "react-icons/di";
import {
    SiSpring,
    SiHibernate,
    SiSpringboot, SiTypescript,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpring/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAndroid/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMsqlServer/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHibernate/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>

        </Row>
    );
}

export default Techstack;
