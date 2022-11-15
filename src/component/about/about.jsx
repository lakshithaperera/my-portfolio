import React from 'react'
import './about.css';
import ME from '../../assets/10.jpg';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id='about'
    
    >
      <motion.h5
      initial={{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.2, type: "tween", duration:1.5}}
      >Get To Know</motion.h5>
      <motion.h2
      initial={{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.2, type: "tween", duration:1.5}}
      >About Me</motion.h2>

      <motion.div className="container about__container"
      initial={{ opacity: 0, x:'-40vw' }}
      whileInView={{ opacity: 1, x:0}}
      transition={{delay:0.2, type: "tween", duration:1}}
      >
        <div className="about__me">
          <motion.div className="about__me-image"
         initial={{ opacity: 1, y:0, rotate:15}}
         whileHover={{ opacity: 0, y:200, rotate:0}}
         transition={{delay:0.2, type: "tween", duration:0.5}}
          >
            <img src={ME} alt="" />
          </motion.div>
          <div className="my-details">
            <div className="line"><h5>   Date of birth </h5> <span>July 30,1999</span></div>
            <div className="line"><h5>   Civil Status </h5><span>Single</span></div>
            <div className="line"> <h5>   Religious</h5> <span>Buddhists</span></div>
            <div className="line"><h5>   Nationality</h5> <span>Sinhala</span></div>
            
          </div>
        </div>

        <div className="about__content">
  
          <p>I am a creative, energetic individual who is willing to embrace new experiences to achieve expertise in web development and design. have  ability to learn any technology in a short time period, and I genuinely love to learn.</p>

          <a href="https://drive.google.com/file/d/1OHqPACrwrUXf80LWwuQz2cOqfxYg3v5l/view?usp=sharinghttps://drive.google.com/file/d/1OHqPACrwrUXf80LWwuQz2cOqfxYg3v5l/view?usp=sharing" target="_blank" rel="noreferrer"   className='btn btn-primary about-btn'> CV</a>
        </div>
      </motion.div>
    </section>
  )
}

export default About
