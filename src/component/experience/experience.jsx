import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id='experience'>
      <motion.h5
      initial={{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.2, type: "tween", duration:1.5}}
      >What Skills I Have</motion.h5>
      <motion.h2
      initial={{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.2, type: "tween", duration:1.5}}
      >My Experience</motion.h2>
      <motion.div className="container experience__container"
       initial={{  opacity: 0, y:-40 }}
       whileInView={{ opacity: 1, y:0}}
       transition={{delay:0.2, duration:1}}
      >
          <div className="experience__frontend"  >
              
              <div className="skill-container"><div className='skill-level skill-good'></div></div>
               
               <div className="experience__content">

                  

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>HTML5</h4>
                      
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>CSS3(Sass,scss)</h4>
                      
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>Bootstrap5</h4>
                      
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                     <div>
                     <h4>JavaScript(ES6+)</h4>
                     
                     </div>
                    </article>

                     

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                     <div>
                     <h4>Node JS</h4>
                     
                     </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>React</h4>

                      </div>
                    </article>



               </div>
          </div>

          <div className="experience__backend">  
          <div className="skill-container"> <div className="skill-level skill-basic"></div></div>   
         
               <div className="experience__content">

                  

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>PHP</h4>
                     
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>Laravel</h4>
                     
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                     <div>
                     <h4>MongoDB</h4>
                     
                     </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>Python</h4>
                     
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>Java</h4>
                     
                      </div>
                    </article>

                    <article className='experience__details'>
                      < BsPatchCheckFill className='experience__details-icon' />
                     <div>
                     <h4>MYSQL</h4>
                     
                     </div>
                    </article>

               </div>

            </div>
      </motion.div>
    </section>
  )
}

export default Experience
