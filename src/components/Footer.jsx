import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>Created by Jeff Thiech</p>
      <a
        href="https://www.linkedin.com/in/jeffthierch/"
        target="_blank"
        rel="noopener noreferrer"
        className="Footer-linkedin"
      >
        <FaLinkedin className="linkedinSvg" />
      </a>
      <a
        href="https://github.com/JeffThierch"
        target="_blank"
        rel="noopener noreferrer"
        className="Footer-github"
      >
        <FaGithub className="Footer-github-svg" />
      </a>
    </footer>
  );
}
