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
        <h2>Work</h2>
          <h3>Full Stack Developer at Sachi</h3>
          <ul className='work-details'>
            <li>Generating a <b>REST API</b> with <b>Express</b> and <b>Apollo GraphQL</b> to handle user details and perform booking services.</li>
            <li>Designing and adapting <b>MongoDB</b> models, queries to accommodate evolving product specifications, providing flexibility to meet the demands of a rapidly expanding product.</li>
            <li>Supporting the development of the user view using <b>Next.js</b> and <b>Chakra UI</b>, ensuring alignment with product designers' specifications and design guidelines.</li>
            <li>Providing technical guidance, mentorship, and direct oversight to a junior engineer, offering support and guidance throughout the project lifecycle. Assisted in their professional development by sharing best practices, conducting code reviews, and fostering a collaborative learning environment.</li>
          </ul>
        <h2>Endeavors</h2>
        <ul className='endeavors-list'>
          <ListItem
            address={'https://dootmaster.github.io/keyframeguitar-ts/'}
            title={'Key Frame Guitar'}
            description={<> A <b>guitar practice application </b>I built using <b>React</b> inspired by key frames in animation. It creates fretboard maps of intersecting harmonies. I created this because I was disatisfied with the complexity and entry costs of existing tools. This app was released to music education communities I am a member of to use free of charge.</>}
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
