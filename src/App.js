import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import  CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
    <PortfolioContainer />
    <Footer />
    </div>
  );
}

export default App;
