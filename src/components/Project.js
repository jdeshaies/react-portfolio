import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from './pages/Portfolio';

export default function Project() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
        return <Portfolio />;
      }
    // if (currentPage === 'Blog') {
    //   return <Blog />;
    // }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
