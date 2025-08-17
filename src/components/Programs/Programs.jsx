// import React from 'react'
// import './Programs.css';
// import program_1 from '../../assets/program-1.png'
// import program_2 from '../../assets/program-2.png'
// import program_3 from '../../assets/program-3.png'
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'

// const Programs = () => {
//   return (
//     <div className='programs'>
//       <div className="program">
//         <img src={program_1} alt="" />
//         <div className="caption">
//             <img src={program_icon_1} alt="" />
//             <p>Graduation Degree</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_2} alt="" />
//         <div className="caption">
//             <img src={program_icon_2} alt="" />
//             <p>Master Degree</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_3} alt="" />
//         <div className="caption">
//             <img src={program_icon_3} alt="" />
//             <p>Post Graduation</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// import React from 'react'
// import './Programs.css';
// import { Link } from "react-router-dom";
// import program_1 from '../../assets/program-1.png'
// import program_2 from '../../assets/program-2.png'
// import program_3 from '../../assets/program-3.png'
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'

// const Programs = () => {
//   return (
//     <div className='programs'>
//       <div className="program">
//         <img src={program_1} alt="" />
//         <div className="caption">
//             <img src={program_icon_1} alt="" />
//             <p>School of Engineering & Technology</p>
//             <Link to="/program/1">
//               <button className="view-btn">View Programs</button>
//             </Link>
//         </div>
//       </div>

//       <div className="program">
//         <img src={program_2} alt="" />
//         <div className="caption">
//             <img src={program_icon_2} alt="" />
//             <p>School of Business & Management</p>
//             <Link to="/program/2">
//               <button className="view-btn">View Programs</button>
//             </Link>
//         </div>
//       </div>

//       <div className="program">
//         <img src={program_3} alt="" />
//         <div className="caption">
//             <img src={program_icon_3} alt="" />
//             <p>School of Hospitality & Tourism</p>
//             <Link to="/program/3">
//               <button className="view-btn">View Programs</button>
//             </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Programs



import React from 'react'
import './Programs.css';
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>School of Engineering & Technology</p>
            <button className="view-btn">View Programs</button>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>School of Business & Management</p>
            <button className="view-btn">View Programs</button>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>School of Hospitality & Tourism</p>
            <button className="view-btn">View Programs</button>
        </div>
      </div>
    </div>
  )
}

export default Programs
