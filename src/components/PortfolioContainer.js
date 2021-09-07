import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "../styles/PortfolioContainer.css";


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        if (currentPage === "About Me"){
            return <About />;
        }
        if (currentPage === "Portfolio"){
            return <Portfolio />;
        }
        if (currentPage === "Resume"){
            return <Resume />;
        }
        if (currentPage === "Contact"){
            return <Contact />;
        }
        return <About />; 
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}