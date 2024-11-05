import React from "react";
import { Col, Row } from "react-bootstrap";
import StackIcon from "tech-stack-icons";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            {/*<Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>*/}
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://icon.icepanel.io/Technology/svg/IntelliJ-IDEA.svg"}
                     style={{width: '75px'}}
                     alt={'intellij'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://icon.icepanel.io/Technology/svg/WebStorm.svg"}
                     style={{width: '75px'}}
                     alt={'intellij'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="swagger" style={{width: '75px'}}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="postman" style={{width: '75px'}}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="apache" style={{width: '75px'}}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://icon.icepanel.io/Technology/png-shadow-512/Gradle.png"}
                     style={{width: '75px'}}
                     alt={'gradle'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://icon.icepanel.io/Technology/svg/Apache-Maven.svg"}
                     style={{width: '75px'}}
                     alt={'maven'}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="npm2" style={{width: '75px'}}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <StackIcon name="git" style={{width: '75px'}}/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <img src={"https://www.tech-stack-icons.com/assets/dark/github.svg"}
                style={{width: '75px'}}
                alt={'github'}/>
            </Col>
        </Row>
    );
}


export default Toolstack;
