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
                <p className="project-description">An app I am developing that is inspired by key frames in animation.
                  This app displays the fretboard map of two harmonies and their possible intersections based on user input.</p>
              </div>
          </div><br />

          <div className="project" id="project-sdc">
            <div className="project-header">
              <div className="project-title">Atelier Product API</div>
              <a href="https://github.com/maythovens-third/Products">Github</a>
            </div>
            <div className="project-body">
              <img className="project-image" src="URL" alt="image of Atelier API tests"></img>
              <p className="project-description">An API that provides data to a fashion products merchant site.</p>
            </div>
          </div><br />

          <div className="project" id="project-catwalk">
            <div className="project-header">
              <div className="project-title">project:Catwalk</div>
              <a href="https://github.com/Weyland-Software-Group/fec/tree/main/client/src/components/Related">Github</a>
            </div>
            <div className="project-body">
              <img className="project-image" src="URL" alt="image of catwalk carousels"></img>
              <p className="project-description">An e-commerce site where I developed the "Related Products" module.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;