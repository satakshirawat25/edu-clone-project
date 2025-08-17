// import React from "react";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Programs from "./components/Programs/Programs";
// import Title from "./components/Title/Title.jsx";
// import About from "./components/About/About.jsx";
// import Campus from "./components/Campus/Campus.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
// import { useState } from "react";

// const App = () => {

//   const [playState, setPlayState] = useState(false);

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <div className="container">
//         <Title subTitle = 'OUR PROGRAMS' title = 'what we offer' />
//         <Programs />
//         <About setPlayState={setPlayState} />
//          <Title subTitle = 'Gallery' title = 'Campus Photos' />
//          <Campus/>
//         <Title subTitle = 'Testimonials' title = 'What our students say' />
//         <Testimonials/>
//         <Title subTitle = 'Contact us' title = 'Get in touch' />
//         <Contact/>
//         <Footer/>

//       </div>
//       <VideoPlayer playState={playState} setPlayState={setPlayState} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import ProgramDetails from "./components/ProgramDetails/ProgramDetails.jsx"; 

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle="OUR PROGRAMS" title="what we offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subTitle="Testimonials" title="What our students say" />
                <Testimonials />
                <Title subTitle="Contact us" title="Get in touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />

        {/* Program Details Page */}
        <Route path="/program/:id" element={<ProgramDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

