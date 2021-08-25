import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    GitHubIcon,
    LinkedInIcon,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SocialMedia.css";

export default function SocialMedia() {
    return (
        <div>
            <h4>
                {""}
                {"/n"}
                <a 
                href="https://github.com/tylerhance" className="github">
                    <FontAwesomeIcon icon={GitHubIcon} size="2x" />
                </a>
                <a 
                href="https://www.linkedin.com/in/tyler-hance/" className="linkedin">
                    <FontAwesomeIcon icon={LinkedInIcon} size="2x" />
                </a>
            </h4>
        </div>
    );
}