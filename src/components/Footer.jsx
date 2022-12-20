import React from "react";
import "../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Desarrollado por{" "}
        <a href="https://joaquinvasquez.github.io/portafolio/" target="_blank">
          Joaquin Vasquez
        </a>{" "}
        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
      </p>
    </div>
  );
};

export default Footer;
