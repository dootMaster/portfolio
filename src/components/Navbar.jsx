import React, { useState } from 'react';

function Navbar () {
  return (
    <div className="navbar-container">
      <h3 className="name-title">leslie ngo <br/>software engineer</h3>
      <ul className="navlist">
        <li><a href="https://github.com/dootMaster">github</a></li>
        <li><a href="https://www.linkedin.com/in/leslie-ngo/">linkedIn</a></li>
        <li><a href="https://docs.google.com/document/d/1WPxfLVLeJL16crd7BkGZYUVbkhIF9b7G53HRJr5u1ks/edit?usp=sharing">resume</a></li>
      </ul>
    </div>
  )
}

export default Navbar;