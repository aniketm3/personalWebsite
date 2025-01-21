import React from 'react';
import './Header.css';
import Projects from './Projects.js'; // Adjust the path as needed

const Header = () => {
  const openResume = () => {
    const resumePath = 'MahajanAniket.pdf';
    const windowName = 'Aniket\'s Resume';

    // Open a new browser window or tab with the resume embedded
    const newWindow = window.open(resumePath, windowName);

    if (newWindow) {
      setTimeout(() => {
        newWindow.document.title = "Aniket's Resume";
      }, 0);
      newWindow.focus();
    }
  };

    function handleButtonClick(location) {
      window.location.href = location;
      }

    function scrollTo(location) {
      // Scroll to the projects section
      const projectsSection = document.getElementById(location);
      console.log('Projects section:', location);
      if (projectsSection) {
        //projectsSection.scrollIntoView();
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <header>
      <button className='left' onClick={() => handleButtonClick("/home")}>
         Aniket Mahajan
      </button>
      {/* <button className='right' onClick={() => handleButtonClick("/about")}>
        About
  </button> */}
      <button className='right' onClick={() => scrollTo("portfolio")}>
        Projects
      </button>
      <button className='right' onClick={() => openResume()}>
        Resume
      </button>
    </header>
  );
};

export default Header;