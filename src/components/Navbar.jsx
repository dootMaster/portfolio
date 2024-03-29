import React, { useState } from 'react';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h3 className="name-title">leslie ngo <br/>software engineer</h3>
      <ul className="navlist">
        <li className='vibes'><a href="https://github.com/dootMaster">github</a></li>
        <li className='vibes'><a href="https://www.linkedin.com/in/leslie-ngo/">linkedIn</a></li>
        <li className='vibes'><a href="https://github.com/dootMaster/portfolio/raw/main/docs/Leslie-Ngo-Resume.pdf" download>resume download</a></li>
      </ul>
    </div>
  )
}

export default Navbar;