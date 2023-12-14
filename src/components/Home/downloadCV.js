import React, { useEffect, useState } from "react";
import pdf from "../../Assets/CV Yassine Deriouch (8) V2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function DownloadCV() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const handleDownloadClick = () => {
        fetch(pdf)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "CV_Yassine_Deriouch.pdf";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("handleDownloadClick")
            })
            .catch((error) => {
                console.error("Error downloading CV:", error);
            });
    };

    const buttonStyles = {
        maxWidth: "150px",
        cursor: "pointer",
    };

    const hoverStyles = {
        backgroundColor: "#6600FF",
        color: "#fff",
        /* Add any other styles you want to apply on hover */
    };

    return (
        <Button
            variant="light"
            onClick={handleDownloadClick}
            className="btn-primary"
            style={buttonStyles}
        >
            <AiOutlineDownload />
            &nbsp;Get my CV
        </Button>
    );
}

export default DownloadCV;
