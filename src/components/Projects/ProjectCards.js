import React, {useEffect, useState} from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function extractRepoMetadataFromURL(ghLink) {

    const urlParts = ghLink.split("/");
    const repoOwner = urlParts[3]; // repo owner from the URL
    const repoName = urlParts[4];  // repo name from the URL

    return { repoOwner, repoName }; // Return as an object
}

function checkRepoVisibility(ghLink) {

    const { repoOwner, repoName } = extractRepoMetadataFromURL(ghLink);

    const githubAPIURL = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    return fetch(githubAPIURL)
        .then((response) => response.json())
        .then((data) => data.visibility || "private")
        .catch((error) => {
            console.log(error);
            return "private";
        });
}

function ProjectCards(props) {
    const [isRepoPrivate, setIsRepoPrivate] = useState(false);

    useEffect(() => {
        async function fetchVisibility() {
            const visibility = await checkRepoVisibility(props.ghLink);
            setIsRepoPrivate(visibility === "private");
        }
        if (props.ghLink) {
            fetchVisibility();
        }
    }, [props.ghLink]);

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        isRepoPrivate ? (
                            <Tooltip id="tooltip-private">This repo is private</Tooltip>
                        ) : (
                            <></>
                        )
                    }
                    trigger={["hover", "focus"]} // Show tooltip on hover and focus
                >
                    <div
                        style={{
                            display: "inline-block",
                            cursor: isRepoPrivate ? "not-allowed" : "pointer",
                        }}
                    >
                        <Button
                            variant="primary"
                            href={props.ghLink}
                            target="_blank"
                            disabled={isRepoPrivate}
                        >
                            <BsGithub /> &nbsp;
                            {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    </div>
                </OverlayTrigger>

                {"\n"}
                {"\n"}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;