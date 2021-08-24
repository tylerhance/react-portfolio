import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import  CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from "./components/PortfolioContainer"

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
