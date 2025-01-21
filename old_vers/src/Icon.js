// Icons.js
import React, { useState, useEffect } from 'react';
import './Icon.js';
// import linkIcon from './linkedinIcon.jpeg';
// import mailIcon from './mailIcon.jpeg';

const Icons = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      setIsAtBottom(scrollPosition + windowHeight + 100 >= documentHeight);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`icons-container ${isAtBottom ? 'visible' : 'hidden'}`}>
      <a href="https://www.linkedin.com/in/aniket-mahajan-52608423b//" target="_blank" rel="noopener noreferrer">
        <img src={"./anotherlinkedin.png"} alt="LinkedIn" />
      </a>
      <a href="mailto:aniket.mahajan@stanford.edu" target="_blank" rel="noopener noreferrer">
        <img src={"./anothermail.png"} alt="Email" />
      </a>
    </div>
  );
};

export default Icons;
