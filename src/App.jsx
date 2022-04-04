import React, { useState } from 'react';
import Main from './components/Main.jsx';
import Blog from './components/blog/blog.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;