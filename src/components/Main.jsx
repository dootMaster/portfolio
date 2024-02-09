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
          Outside of work, I like to <a href="https://www.instagram.com/p/CToWJs7FI9M/?utm_source=ig_web_copy_link">play guitar</a> and <a href="https://www.instagram.com/p/CS5p-90rk6n/?utm_source=ig_web_copy_link">cook nice meals</a>.
        </p>
      </div>
      <br/>
      <div className="projects">
        <h1>Work</h1>
          <ul>
            <li>
              <h3>Title: Full Stack Developer at Sachi</h3>
              <p>In my last role, I was responsible for generating a REST API using Express and Apollo GraphQL to manage user details and facilitate booking services. I also played a key role in designing and adapting MongoDB models and queries to accommodate evolving product specifications, ensuring flexibility to meet the demands of our rapidly expanding product. Additionally, I contributed to the development of the user interface using Next.js and Chakra UI, ensuring alignment with product designers' specifications and design guidelines. Furthermore, I provided technical guidance, mentorship, and direct oversight to a junior engineer, supporting their professional development through sharing best practices, conducting code reviews, and fostering a collaborative learning environment throughout the project lifecycle.</p>
            </li>
          </ul>
        <h1>Projects</h1>
        <ul>
          <ListItem
            address={'https://dootmaster.github.io/keyframeguitar-ts/'}
            title={'Key Frame Guitar'}
            description={<> A <b>music practice application </b>I built using <b>React</b> inspired by key frames in animation. This app takes user input and creates fretboard maps of intersecting harmonies. </>}
          />
          <ListItem
            address={"https://github.com/maythovens-third/Products"}
            title={'Atelier Product API'}
            description={<> An <b>API</b> that provides data to a fashion products merchant site. Three instances of <b>Express.js</b> servers were deployed via <b>AWS</b> behind an <b>NGINX</b> load balancer, and connected to a server hosting a database powered by <b>PostgreSQL</b>. I wrote <b>K6 tests</b> that created up to 3000 virtual users that bombard the load balancer with requests in order to locate where optimizations can be performed.</>}
          />
          <ListItem
            address={'https://youtu.be/jaNWTNB9OsA'}
            title={'project:CATWALK'}
            description={<> An <b>e-commerce React application</b> where I built the "Related Products" module. I made <b>carousels</b> from scratch to enhance customizability. I also built a data algorithm that both <b>reduced requests made to the API</b> as well as <b>improved speed of responses</b> to user actions.</>}
          />
          <ListItem
            address={'https://dootmaster.github.io/metronome/'}
            title={'Metronome'}
            description={<> A metronome I built based off of Grant James' scheduling algorithm using <b>React</b>. setInterval is not accurate enough for musicians to keep time, and this app employs a <b>combination of setInterval and Web Audio API's</b> currentTime method to ensure that timing is robust and usable for practice. </>}
          />
        </ul>
      </div>
    </div>
  )
}

export default Main;
