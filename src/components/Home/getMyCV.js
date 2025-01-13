import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function GetMyCV() {

    //////////////////// mega cloud file sharing (link)////////////////////////
    const sharedLink = "https://mega.nz/folder/ZUFiAbjC#XqQOzTN91PAuy43S2cOpBA"

    const formatUrl = (url) => {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                return `https://${url}`;
            }
        return url;
    }


    const buttonStyles = {
        maxWidth: "150px",
        cursor: "pointer",
        backgroundColor: "#6600FF",
        color: "#fff",

    };

    return (
        <Button
            variant="light"
            href={formatUrl(sharedLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={buttonStyles}
        >
            <AiOutlineDownload />
            &nbsp;Get my CV
        </Button>
    );
}

export default GetMyCV;
