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
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />HTML</li> 
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" listItem />CSS</li> 
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

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import green from "@material-ui/core/colors/green";
// import { Grid } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   },
//   customColor: {
//     // or hex code, this is normal CSS background-color
//     backgroundColor: green[500]
//   },
//   customHeight: {
//     minHeight: 200
//   },
//   offset: theme.mixins.toolbar
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();
//   const [example, setExample] = useState("primary");
//   const isCustomColor = example === "customColor";
//   const isCustomHeight = example === "customHeight";
//   return (
//     <React.Fragment>
//       <AppBar
//         color={isCustomColor || isCustomHeight ? "primary" : example}
//         className={`${isCustomColor && classes.customColor} ${
//           isCustomHeight && classes.customHeight
//         }`}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Tyler Hance
//           </Typography>
          
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             About Me
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             Portfolio
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             Resume
//           </IconButton>
//           <IconButton color="inherit" onClick={() => setExample("primary")}>
//             Contact
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
      
//       <h1>About Me</h1>
//             <img src={Photo} alt="Tyler's headshot" />
//       <Typography>
//       Hi, my name is Tyler and I am an aspiring full-stack web developer. I am currently enrolled
//                  in the UW coding bootcamp. I've always been fascinated by programming and am eagerly looking forward
//                  to the opportunity to move forward with that fascination and make it a reality. I love challenging myself
//                  and working with other like-minded people to solve problems and accomplish goals. 
//                  {"\n"}
//             <br /><br />
//                 My current tech skills include: 
//                      <ul>
//                          <li>HTML</li> 
//                          <li>CSS</li> 
//                          <li>JavaScript</li>
//                          <li>Node/Express.js</li>
//                          <li>MySQL</li>
//                          <li>Sequelize (ORM)</li>
//                          <li>MongoDB</li>
//                          <li>Mongoose (ODM)</li>
//                          <li>GraphQL</li>
//                          <li>React</li>
//                          <li>Git</li>
//                      </ul>
//              <br />
//                  When I'm not sitting at a computer studying/working on code, you can find me playing Skyrim,
//                  recording music, and/or enjoying a cup of coffee.{" "}
//       </Typography>
//     </React.Fragment>
//   );
// }
