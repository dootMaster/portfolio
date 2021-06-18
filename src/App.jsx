import React, { useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import SkillLogos from './components/SkillLogos.jsx';

function App() {
  return (
    <div>
      <Header />
      <div id="body">
        <div id="about-and-skills-container">
          <About />
          <SkillLogos />
        </div>

        <div id="projects-container">

          <div className="project" id="project-key-frame-guitar">
            <div className="project-header">
              <div className="project-title">Key Frame Guitar</div>
              <div className="project-button">
                <p><a href="https://dootmaster.github.io/keyframeguitar/">Poke around the app.</a></p>
              </div>
              <div className="project-button">
                <p><a href="https://github.com/dootMaster/keyframeguitar">Poke around the code.</a></p>
              </div>
            </div>
              <div className="project-body">
                <img className="project-image" src="main-active.png" alt="image of key frame guitar"></img>
                <p className="project-description">A guitar navigation app I built inspired by key frames in animation.
                  This app displays the fretboard map of two harmonies and their possible intersections based on user input.</p>
              </div>
          </div><br />

          <div className="project" id="project-sdc">
            <div className="project-header">
              <div className="project-title">Atelier Product API</div>
              <div className="project-button">
                <p><a href="https://github.com/maythovens-third/Products">Poke around the code.</a></p>
              </div>
            </div>
            <div className="project-body">
              <img className="project-image" src="4.png" alt="image of Atelier API tests"></img>
              <p className="project-description">An API that provides data to a fashion products merchant site.
              Three instances of Express.js servers were deployed behind an NGINX load balancer, and connected to an instance of PostgreSQL.
              I wrote K6 tests that created up to 3000 virtual users that bombard the load balancer with requests in order to locate where optimizations can be made to the system.</p>
            </div>
          </div><br />

          <div className="project" id="project-catwalk">
            <div className="project-header">
              <div className="project-title">project:Catwalk</div>
              <div className="project-button">
                <p><a href="https://github.com/Weyland-Software-Group/fec/tree/main/client/src/components/Related">Poke around the code.</a></p>
              </div>
            </div>
            <div className="project-body">
              <iframe width="480" height="360"
                src="https://youtube.com/embed/jaNWTNB9OsA">
              </iframe>
              <p className="project-description">An e-commerce site where I built the "Related Products" module. I built these carousels from scratch to enhance customizability.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;