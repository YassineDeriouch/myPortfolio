import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="11" className="footer-copywright">
          <h5>Template by Sb.</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
