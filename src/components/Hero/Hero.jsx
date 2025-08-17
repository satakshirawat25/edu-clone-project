import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Amrapali University, Haldwani offers world-class education in technology, management, commerce, and hospitality. With a focus on innovation and holistic growth, we prepare students to excel in their careers and life.”</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero

