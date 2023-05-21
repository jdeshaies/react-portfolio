import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <a href="https://github.com/jdeshaies"><FaGithubSquare size={40}/></a>
      <a href="https://www.linkedin.com/in/joseph-deshaies-42b554130"><FaLinkedin size={40}/></a>
      <a href="https://www.facebook.com/joey.deshaies"><FaFacebookSquare size={40}/></a>
    </div>
  );
}
