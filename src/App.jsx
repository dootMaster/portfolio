import React from 'react';
import Main from './components/Main.jsx';
import Blog from './components/blog/Blog.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Entry from './components/blog/Entry.jsx';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;