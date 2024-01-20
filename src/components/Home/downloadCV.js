import React, { useEffect, useState } from "react";
import CV_FR from "../../Assets/CV Yassine Deriouch (8) V2.pdf";
import CV_EN from "../../Assets/Yassine Deriouch - Resume (8).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function DownloadCV() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

/*    const handleDownloadClick = () => {
        fetch(CV_FR)
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
    };*/

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleDownloadClick = async (pdfFile,FileName) => {
        try {
            const response = await fetch(pdfFile);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");


            a.download = FileName;
            a.href = url;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const downloadCV = async () => {
        await handleDownloadClick(CV_FR,"CV Yassine Deriouch FR.pdf");
        await delay(2500);
        await handleDownloadClick(CV_EN,"CV Yassine Deriouch EN.pdf");
        console.log("Both downloads completed");
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
            onClick={downloadCV}
            className="btn-primary"
            style={buttonStyles}
        >
            <AiOutlineDownload />
            &nbsp;Get my CV
        </Button>
    );
}

export default DownloadCV;
