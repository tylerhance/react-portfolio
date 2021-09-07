import React from "react";
import Photo from "../../images/me.jpeg";
// import Navbar from "../Navbar";
import "../../styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


export default function About() {
    return(
        <div>
            <h1>About Me</h1>
            <img src={Photo} id="photo-me" alt="Tyler's headshot"  className="photo-me"/>
            <br />
            <div className="about-container">
            <p>
                Hi, my name is Tyler and I am a full-stack web developer. I am currently enrolled
                in the UW coding bootcamp. I've always been fascinated by programming and am eagerly looking forward
                to the opportunity to move forward with that fascination and make it a reality. I love challenging myself
                and working with other like-minded people to solve problems and accomplish goals. 
            <br />
                My current tech skills include: 
                    <ul>
                        <li>HTML</li> 
                        <li>CSS</li> 
                        <li>JavaScript</li>
                        <li>Node/Express.js</li>
                        <li>MySQL</li>
                        <li>Sequelize (ORM)</li>
                        <li>MongoDB</li>
                        <li>Mongoose (ODM)</li>
                        <li>GraphQL/Apollo Server</li>
                        <li>React</li>
                        <li>Git</li>
                    </ul>
            <br />
                When I'm not sitting at a computer studying/working on code, you can find me playing Skyrim,
                recording music, and/or enjoying a cup of coffee.
            </p>
            </div>
        </div>
        );
    
}

