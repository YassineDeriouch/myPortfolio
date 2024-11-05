import React from "react";
import {Col, Row} from "react-bootstrap";
import StackIcon from "tech-stack-icons";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="java" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="spring" style={{ width: '75px' }}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="angular17" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="vuejs" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="nodejs" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="nestjs" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="typescript" style={{ width: '75px' }}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="html5" style={{ width: '75px' }}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="css3" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="bootstrap5" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="tailwindcss" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://www.primefaces.org/wp-content/uploads/2018/05/primefaces-logo.png"}
                     style={{width: '100%'}}
                     alt={'primeNG'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="android" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="mongodb" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="mysql" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="postgresql" style={{ width: '75px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://icon.icepanel.io/Technology/svg/Hibernate.svg"}
                     style={{width: '75px'}}
                     alt={'HIBERNATE'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://avatars.githubusercontent.com/u/20165699?s=200&v=4"}
                     style={{width: '95px'}}
                     alt={'typeORM'}/>
            </Col>
        </Row>
    );
}

export default Techstack;
