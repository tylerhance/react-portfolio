import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SocialMedia.css";

export default function SocialMedia() {
    return (
        <div className="icon-wrapper">
            <h4>
                {""}
                {"\n"}
                <a 
                href="https://github.com/tylerhance" className="github">
                    <FontAwesomeIcon color="#26ac30" icon={faGithub} size="3x" />
                </a>
                <a 
                href="https://www.linkedin.com/in/tyler-hance/" className="linkedin">
                    <FontAwesomeIcon color="#26ac30" icon={faLinkedin} size="3x" />
                </a>
            </h4>
        </div>
    );
}