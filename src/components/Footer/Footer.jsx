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
        <span>aksingla00776@codingninjas.com</span>
        
        <div className="f-icons">
        <a href="https://github.com/Aksingla00776"><img src={Github} alt="" color="white" size={"3rem"}/></a>
        <a href="https://www.linkedin.com/in/ankushsingla/"><img src={LinkedIn} alt="" color="white" size={"3rem"}/></a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
