import React from 'react'
import CV from '../../assets/lakshitha-cv.pdf';


const CTA = () => {
  return (
    <div className="cta">
      
        <a href={CV} download className='btn btn-primary cv-btn'>Download CV</a>
        <a href="#portfolio" className='btn btn-primary btn-h'>Portfolio</a>
    </div>
  )
}

export default CTA