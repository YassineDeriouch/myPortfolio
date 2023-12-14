import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Yassine Deriouch resume.pdf";
import pdf_frenchVersion from "../../Assets/CV Yassine Deriouch (8) V2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf_frenchVersion}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Get my CV
          </Button>

          <Button
              variant="primary"
              href={pdf_frenchVersion}
              target="_blank"
              style={{ maxWidth: "250px",marginLeft: "30px" }}
          >
            <AiOutlineDownload />
            &nbsp;Get my CV - French version
          </Button>
          <Document file={pdf_frenchVersion} className="d-flex justify-content-center"></Document>
        </Row>

        <Row className="resume">
          <Document file={pdf_frenchVersion} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
