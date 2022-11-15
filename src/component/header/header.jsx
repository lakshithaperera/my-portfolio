import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/9.jpg";
import HeaderSocials from "./headerSocials";
import "./heder";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
    initial={{opacity:0, y:-80}}
    whileInView={{ opacity: 1, y:0 }}
    transition={{delay:0.2, type: "tween", duration:1.5}}
    >
      <div className="container header__container">
        <h5>Hello.. I'm</h5>

        <h1>
          <a style={{ fontSize:"25px"}} 
            href=""
            class="typewrite"
            data-period="2000"
            data-type='[ "Lakshitha Perera", "Passionate student of", "Full Stack Development" ]'
          >
            <span class="wrap"></span>
          </a>
        </h1>

        

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>
        
        
        <div  className="scroll__down arrow" id="#contact">
          
          <span></span>
          <span></span>
          <span></span>
         
        </div>
       
      </div>
    </motion.header>
  );
};

export default Header;
