import React from "react";
import "../styles/Header.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Photo from "../images/me.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

function Header() {
    const classes = useStyles();
    return(
        <header className="header">
            {/* <Avatar alt="Tyler Hance" src={Photo} className={classes.medium} /> */}
            <h1>Tyler Hance</h1>

        </header>
    );
}

export default Header;