import React, { useState } from 'react';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Main />
      </div>
    </div>
  );
}

export default App;