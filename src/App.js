import React from 'react';
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
