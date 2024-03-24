import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Icons from './Icon';

function App() {
  
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <div className="Footer-section">
        <Footer />
      </div>
      <div className="icons-container">
        <Icons />
      </div>
    </div>
  );
}

export default App;
