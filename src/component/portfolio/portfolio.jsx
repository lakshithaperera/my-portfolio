import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'
import IMG10 from '../../assets/portfolio10.png'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from '../../assets/portfolio12.png'

import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <motion.h5
       initial={{opacity:0}}
       whileInView={{ opacity: 1 }}
       transition={{delay:0.1, type: "tween", duration:1.5}}
      >My Recent Work</motion.h5>
      <motion.h2
       initial={{opacity:0}}
       whileInView={{ opacity: 1 }}
       transition={{delay:0.2, type: "tween", duration:1.5}}
      >Portfolio</motion.h2>
        <div className="container portfolio__container">

        <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.1, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://chat-app-mocha-gamma.vercel.app">
                  <img src={IMG12} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>Realtime-Chat-app <span>(Responsive)</span> <br/> <span>You can use this to privately chat with other users</span></h3>
                 <p>Technologies - <span>React | firebase | javascript| Sass  | html | css</span> </p>
                 </div>

                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/chat-app-project.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://chat-app-mocha-gamma.vercel.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.1, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://user-management-system-lakshithaperera.onrender.com/">
                  <img src={IMG11} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>Users-Management-system <span>(Responsive)</span> <br/> <span>This is a CRUD app.this can store user data. New user data can be added, user data can be updated and deleted</span></h3>
                 <p>Technologies - <span>NodeJs | express | javascript | express-handlebars | mysql | html | css | bootstrap</span> </p>
                 </div>

                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/user-management-system.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://user-management-system-lakshithaperera.onrender.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.2, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/color-shades-generator/">
                  <img src={IMG10} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>color-shades-generator <span>(Responsive)</span> <br/> <span>you can generate multiple shades of a single color by Simply enter color code</span></h3>
                 <p>Technologies - <span>React | Styled-components | javascript | html | css</span> </p>
                 </div>

                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/color-shades-generator.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/color-shades-generator/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>
             
         
             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.2, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/landing-page-web-project/">
                  <img src={IMG1} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>landing-page <span>(Responsive)</span> <br/> <span>Frontend Mentor Challange</span></h3>
                 <p>Technologies - <span>React | Styled-components | javascript | html | css</span> </p>
                 </div>

                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/landing-page-web-project.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/landing-page-web-project/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.2, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/tip-calculator-app/" rel="noreferrer">
                  <img src={IMG2} alt="" />
                  </a>
                  
                 </div>

                 <div className="text-area">
                 <h3>tip-calculator-app<span>(Responsive)</span> <span>Frontend Mentor Challange</span></h3>
                 <p>Technologies -<span> React | Styled-components | javascript | html | css</span></p>
                 </div>
                
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/tip-calculator-app.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/tip-calculator-app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>


             <motion.article className='portfolio__item'
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:0.3, duration:1}}
             >
                 <div className="portfolio__item-image">
                   
                   <a href="https://lakshithaperera.github.io/ecommerce-product-page-main/">
                   <img src={IMG3} alt="" />
                   </a>
                 </div>

                 <div className="text-area"><h3>ecommerce-product-page<span>(Responsive)</span><span>Frontend Mentor Challange</span></h3>
                 <p>Technologies -<span> javascript | html | css</span> </p></div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/ecommerce-product-page-main.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/ecommerce-product-page-main/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>


             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.3, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/my-project-Huddle/">
                  <img src={IMG4} alt="" />
                  </a>
                  
                 </div>

                 <div className="text-area">
                 <h3>landing-page<span>(Responsive)</span><span>Frontend Mentor Challange</span></h3>
                 <p>Technologies -<span> React | Styled-components | javascript | html | Sass</span></p>
                 </div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/my-project-Huddle.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/my-project-Huddle/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>


             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.3, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/adventure-blog-site/">
                  <img src={IMG5} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>Blog-site<span>(Responsive)</span><span></span></h3>
                 <p>Technologies -<span>  javascript | html | css</span></p>
                 </div>
                
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/adventure-blog-site.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/adventure-blog-site/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.4, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/coffee-website/">
                  <img src={IMG8} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>coffee shop<span>(Responsive)</span></h3>
                 <p>Technologies -<span>javascript | html | css</span></p>
                 </div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/coffee-website.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/coffee-website/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>


             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.4, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/stats-preview-component/">
                  <img src={IMG6} alt="" />
                  </a>
                 
                 </div>

                 <div className="text-area">
                 <h3>stats-preview-component<span>(Responsive)</span><span>Frontend Mentor Challange</span></h3>
                 <p>Technologies -<span> React | Styled-components | javascript | html | css</span></p>
                 </div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/stats-preview-component.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/stats-preview-component/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             
             <motion.article className='portfolio__item'
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y:0}}
              transition={{delay:0.4, duration:1}}
             >
                 <div className="portfolio__item-image">
                  <a href="https://lakshithaperera.github.io/gov-lk-clone/">
                  <img src={IMG7} alt="" />
                  </a>
                   
                 </div>

                 <div className="text-area">
                 <h3>gov.lk clone<span>(Non-Responsive)</span></h3>
                 <p>Technologies -<span> React  | javascript | html | Sass</span></p>
                 </div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/gov-lk-clone.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/gov-lk-clone/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>

             

             
             <motion.article className='portfolio__item'
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y:0}}
             transition={{delay:0.2, duration:1}}
             >
                 <div className="portfolio__item-image">
                   <a href="https://lakshithaperera.github.io/calculator-app/"><img  src={IMG9} alt="" />
                   </a>
                 </div>

                 <div className="text-area">
                 <h3>calculator-app<span>(Responsive)</span></h3>
                 <p>Technologies -<span>React | javascript | html | css</span></p>
                 </div>
                 
                   <div className="portfolio__item-cta">
                   <a href="https://github.com/lakshithaperera/calculator-app.git" className='btn' target='_blank' rel="noreferrer">Github</a>
                   <a href="https://lakshithaperera.github.io/calculator-app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
             </motion.article>


            
        </div>
    </section>
  )
}

export default Portfolio