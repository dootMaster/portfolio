import React from 'react';
import ListItem from './ListItem.jsx';

function Main () {
  return (
    <div className="main">
      <div className="bio">
        <h1>I'm Leslie</h1>
        <p>Software engineer with a demonstrated mindset for clean, modular code in order to achieve scalability and optimization.
          I work with JavaScript, TypeScript, React.js, Express.js, various CSS libraries, PostgreSQL, MySQL, MongoDB, AWS, and NGINX to create full-stack applications.
          I'm currently developing a web application that helps guitarists improve their fretboard navigation abilities.</p><br/>
          <p>
          Outside of work, I like to <a href="https://www.instagram.com/p/B-Dj4Maho2H/?utm_source=ig_web_copy_link">play guitar</a> and <a href="https://www.instagram.com/p/CS5p-90rk6n/?utm_source=ig_web_copy_link">cook nice meals</a>.
        </p>
      </div>
      <br/>
      <div className="projects">
        <h1>Projects</h1>
        <ul>
          <ListItem
            address={'https://dootmaster.github.io/keyframeguitar/'}
            title={'Key Frame Guitar'}
            description={"A music practice application I built using React inspired by key frames in animation. This app takes user input and creates fretboard maps of intersecting harmonies."}
          />
          <ListItem
            address={"https://github.com/maythovens-third/Products"}
            title={'Atelier Product API'}
            description={'An API that provides data to a fashion products merchant site. Three instances of Express.js servers were deployed via AWS behind an NGINX load balancer, and connected to a server hosting a database powered by PostgreSQL. I wrote K6 tests that created up to 3000 virtual users that bombard the load balancer with requests in order to locate where optimizations can be performed.'}
          />
          <ListItem
            address={'https://youtu.be/jaNWTNB9OsA'}
            title={'project:CATWALK'}
            description={'An e-commerce site where I built the "Related Products" module. I made carousels from scratch to enhance customizability.'}
          />
        </ul>
      </div>
    </div>
  )
}

export default Main;