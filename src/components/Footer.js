import React from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <a href="https://github.com/jdeshaies"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/joseph-deshaies-42b554130"><FaLinkedin /></a>
      <a href="https://www.facebook.com/joey.deshaies"><FaFacebookSquare /></a>
    </div>
  );
}
