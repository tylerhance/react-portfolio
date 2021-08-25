import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BudgetTracker from '../../images/budgettracker.jpeg';
import EmployeeTracker from '../../images/employeetracker.jpeg';
import FitnessTracker from '../../images/fitnesstracker.jpeg';
import GiftList from '../../images/giftlist.jpeg';
import TechBlog from '../../images/techblog.jpeg';
import CookAndBrew from '../../images/CookNBrew.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


export default function Portfolio() {
    const classes = useStyles();
    return (
        <div>
            <h1>My Projects</h1>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Gift List"
          height="140"
          image="/static/images/cards/giftlist.jpeg"
          title="Gift List"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gift List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This application aims to make keeping track of gifts for family and friends much easier by allowing a user to create an account, create a gift by taking into account who the gift receiver is, and what they are getting for them. 
          The app also provides users with a page to view all of their existing gifts, as well as an option to delete, update a gift, and mark it as being completed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/CailinBellWold/Gift-List">GitHub Link</a> 
        </Button>
        <Button size="small" color="primary">
        <a href="https://project-2-gift-list.herokuapp.com/">Heroku</a>
        </Button>
      </CardActions>
    </Card>

    
        </div>
    );
}
