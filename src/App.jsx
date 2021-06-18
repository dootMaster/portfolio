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
              <a href="https://dootmaster.github.io/keyframeguitar/">Poke around the app.</a>
              <a href="https://github.com/dootMaster/keyframeguitar">Poke around the code.</a><br />
            </div>
              <div className="project-body">
                <img className="project-image" src="main-active.png" alt="image of key frame guitar"></img>
                <p className="project-description">A guitar navigation app I am building inspired by key frames in animation.
                  This app displays the fretboard map of two harmonies and their possible intersections based on user input.</p>
              </div>
          </div><br />

          <div className="project" id="project-sdc">
            <div className="project-header">
              <div className="project-title">Atelier Product API</div>
              <a href="https://github.com/maythovens-third/Products">Poke around the code.</a>
            </div>
            <div className="project-body">
              <img className="project-image" src="4.png" alt="image of Atelier API tests"></img>
              <p className="project-description">An API that provides data to a fashion products merchant site.</p>
            </div>
          </div><br />

          <div className="project" id="project-catwalk">
            <div className="project-header">
              <div className="project-title">project:Catwalk</div>
              <a href="https://github.com/Weyland-Software-Group/fec/tree/main/client/src/components/Related">Poke around the code.</a>
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