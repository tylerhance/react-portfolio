import React from "react";
import MyResume from '../../images/resume.jpeg';
import "../../styles/App.css";
import ResumeDL from "../../images/Tyler J. Hance_Resume.pdf";
import Button from '@material-ui/core/Button';

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>
                {" "}
                <img src={MyResume} alt="Tyler's Resume" />
                <br />
                <a href={ResumeDL}
                download="MyExampleDoc"
                target="_blank"
                rel="noreferrer">
                    <Button>Download my resume!</Button>
                    </a>
            </p>
        </div>
    );
}

