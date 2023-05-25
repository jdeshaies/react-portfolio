import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
      const iconStyle = {
        margin: "10px",
      };
  return (
    <div style={footerStyle}>
      <a href="https://github.com/jdeshaies"><FaGithubSquare style={iconStyle} size={60}/></a>
      <a href="https://www.linkedin.com/in/joseph-deshaies-42b554130"><FaLinkedin style={iconStyle} size={60}/></a>
      <a href="https://www.facebook.com/joey.deshaies"><FaFacebookSquare style={iconStyle} size={60}/></a>
    </div>
  );
}
