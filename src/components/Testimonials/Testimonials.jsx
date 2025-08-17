import React from 'react'
import {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
       if(tx >-50){
        tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
       if(tx < 0){
           tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sonam verma</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "I completed my Bachelor’s in Computer Applications here, and the
                experience was incredible. The practical teaching style, cultural
                exposure, and guidance from mentors shaped my knowledge and career
                foundation."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mohit mehra</h3>
                  <span>Delhi, India</span>
                </div>
              </div>
              <p>
                "Pursuing an MBA program was a life-changing journey. The faculty
                encouraged innovative thinking, the modern resources enriched my
                learning, and the overall atmosphere helped me gain confidence and
                leadership skills."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Anaya Mehta</h3>
                  <span>Dehradun, India</span>
                </div>
              </div>
              <p>
                "During my Master’s in Hospitality Management, I learned both
                theory and hands-on skills. The supportive professors and excellent
                facilities prepared me well for global opportunities in the
                hospitality sector."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Priyansh negi</h3>
                  <span>Lucknow, India</span>
                </div>
              </div>
              <p>
                "I pursued my B.Tech in Information Technology and gained practical
                exposure through projects, workshops, and guidance from experienced
                mentors. The environment boosted my confidence, improved my skills,
                and prepared me for competitive opportunities in the IT industry."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
