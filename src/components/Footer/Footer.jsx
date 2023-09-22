import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>neelesh.tiwari@codingninjas.com</span>
        
        <div className="f-icons">
        <a href="https://github.com/Neelesh56789"><img src={Github} alt="" color="white" size={"3rem"}/></a>
        <a href="https://www.linkedin.com/in/neelesh-tiwari-076922176/"><img src={LinkedIn} alt="" color="white" size={"3rem"}/></a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
