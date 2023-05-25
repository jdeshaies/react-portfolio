import React from "react";

const navigationStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
  listStyle: "none",
  padding: "0%",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  width: "20%",
  fontSize: "25px"
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={navigationStyle}>
      <li className="nav-item">
        <a
          style={linkStyle}
          href="#about-me"
          onClick={() => handlePageChange("AboutMe")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "About Me" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={linkStyle}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          style={linkStyle}
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
