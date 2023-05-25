import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Project() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const headingStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "grey",
    padding: "0% 2%",
  }

  const contentStyle = {
    padding: "0% 4%",
  }

  return (
    <div>
      <div style={headingStyle}>
        <Header />
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div style={contentStyle}>
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
