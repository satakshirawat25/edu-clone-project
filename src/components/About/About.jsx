import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
            </div> 
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Shaping Future Leaders with Knowledge, Innovation, and Excellence</h2>

            <p>Nestled in the serene foothills, this institute blends academic excellence with cultural richness. Offering diverse courses, it nurtures curiosity, knowledge, and skills, enabling learners to pursue meaningful careers and contribute positively to society.</p>

<p>Through innovative teaching methods, research opportunities, and industry exposure, students explore engineering, management, hospitality, commerce, and sciences. Faculty mentors focus on holistic learning, ensuring every learner develops confidence, creativity, and problem-solving skills required for professional growth.</p>

<p>The vibrant campus promotes extracurricular activities, sports, and cultural events that foster leadership and teamwork. With career services, internships, and global partnerships, graduates embark on successful journeys aligned with their passions and aspirations.</p>

        </div>

    </div>
  )
}

export default About
