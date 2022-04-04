import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h3 className="name-title">leslie ngo <br/>software engineer</h3>
      <ul className="navlist">
        <li><Link to="/">home</Link></li>
        <li><a href="https://github.com/dootMaster">github</a></li>
        <li><a href="https://www.linkedin.com/in/leslie-ngo/">linkedIn</a></li>
        <li><a href="https://github.com/dootMaster/portfolio/raw/main/docs/Leslie-Ngo-Resume.pdf" download>resume download</a></li>
        <li><Link to="/blog">blog</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;