import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";

import MyNavbar from './components/myNavbar/myNavbar.component';
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Experience from './pages/experience/experience.component';
import Skills from './pages/skills/skills.component';
import TimeLine from './components/projects-timeline/projects-timeline.component';
import Footer from './components/footer/footer.component';

// import Particles from 'react-particles-js';
// import {particlesOptions} from './particlesOptions';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{position: "relative"}}>
      <MyNavbar/>
         {/* <Particles className="particles particles-box" params={particlesOptions}/>  */}
      <MyCarousel/>
      <TitleMessage/>

      <div>
        <Parallax className="about"
            blur={{ min: -1000, max: 1000 }}
            strength={-200}
          >
            <Container className="container-box rounded">
              <Fade duration={500}>
                 <About/>
              </Fade>
            </Container>
         </Parallax>
      </div>

      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      </div>

      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Experience />
        </Slide>
      </Container>
      </div>

      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      </div>
      
      <hr />
      <Footer />
      
    </div>
  );
}

export default App;
