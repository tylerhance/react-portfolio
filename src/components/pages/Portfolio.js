import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BudgetTracker from '../../images/budgettracker.jpeg';
import NoteTaker from '../../images/notetakerdemo.gif';
import FitnessTracker from '../../images/fitnesstracker.jpeg';
import GiftList from '../../images/giftlist.jpeg';
import CookAndBrew from '../../images/CookNBrew.png';
import WeatherDash from '../../images/weather.jpeg';
import "../../styles/About.css";
import "../../styles/PortfolioContainer.css";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper, 
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    width: '103%',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    img: `${GiftList}`,
    title: "Gift List",
    desc: "This application aims to make keeping track of gifts for family and friends much easier by allowing a user to create an account, create a gift by taking into account who the gift receiver is, and what they are getting for them. Our app also provides users with a page to view all of their existing gifts, as well as an option to delete, update a gift, and mark it as being completed.",
    desc2: "Technologies used: JavaScript, Sequelize, Node/Express.js, MySQL, Handlebars, TestCafe, Bootstrap, bcrypt, deployed to Heroku.",
    link: "https://github.com/CailinBellWold/Gift-List",
    link2: "https://project-2-gift-list.herokuapp.com/"
  },
  {
    img: `${BudgetTracker}`,
    title: "Budget Tracker",
    desc: "Utilizing the Progressive Web App (PWA),the user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
    desc2: "Technologies used: MongoDB, Mongoose, JavaScript, Webpack, PWA, Heroku/MongoAtlas-Deploy.",
    link: "https://github.com/tylerhance/Progressive-Budget",
    link2: "https://desolate-everglades-17776.herokuapp.com/"
  },
  {
    img: `${CookAndBrew}`,
    title: "Cook-N-Brew",
    desc: "A food/beverage app that was designed around the idea of wanting to prepare a home-cooked meal and finding/discovering new breweries in your area to pair your meal with. The user is able to select a recipe from different categories and view the recipe they want to prepare. Then search for a brewery in their area to enjoy after dinner or to grab-and-go from for dinner later that night!",
    desc2: "Technologies used: JavaScript, HTML, CSS (Materialize), RESTful API's, Deployed to GH-pages.",
    link: "https://github.com/CMartin1336/Cook-N-Brew",
    link2: "https://cmartin1336.github.io/Cook-N-Brew/"
  },
  {
    img: `${WeatherDash}`,
    title: "Weather Dashboard",
    desc: "I developed a weather dashboard app for any person to be able to see the weather outlook for any given day and for multiple cities. The user may be traveling and needs to know what the forecast will be like to plan accordingly. The user can access the 5-day forecast for a specific city, which also includes important data such as the temperature, humidity, wind speed, and the UV index. Weather conditions are represented with icons and colors that represent the conditions of the weather as favorable, moderate, or severe.",
    desc2: "Technologies used: JavaScript, HTML, CSS, RESTful API's, deployed to GH-pages.",
    link: "https://github.com/tylerhance/weather-dashboard",
    link2: "https://tylerhance.github.io/weather-dashboard/"
  },
  {
    img: `${FitnessTracker}`,
    title: "Fitness Tracker",
    desc: "Fitness Tracker is an app built for users to create and track daily workouts. It allows anyone to be able to track the name, type, weight, sets, reps, and duration of exercise.",
    desc2: "Technologies used: JavaScript, Node/Express.js, MongoDB, Mongoose, deployed to Heroku.",
    link: "https://github.com/tylerhance/Workout-Tracker",
    link2: "https://desolate-everglades-17776.herokuapp.com/"
  },
  {
    img: `${NoteTaker}`,
    title: "Note Taker",
    desc: "Note Taker is application that allows users to write, save, update and delete notes. The user can keep track of to-do lists, grocery items, etc. by utilizing this note taking app.",
    desc2: "Technologies used: JavaScript, MySQL, Node/Express.js, Heroku Deploy.",
    link: "https://github.com/tylerhance/Note-Taker",
    link2: "https://enthousiaste-baguette-93395.herokuapp.com/"
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
      <h1 className="projects">Projects</h1>
        
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.desc}
                      {'\n'}
                      {card.desc2}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.link}>
                      GitHub
                    </Button>
                    <Button size="small" color="primary" href={card.link2}>
                      Deployed App
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}