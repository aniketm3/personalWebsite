import React from 'react';
import './Projects.css';
import basketball from "./basketball.jpg";
import runner from "./codeRunner.png";
import barball from "./barball.png";
import web from "./webimage.png";

const Project = ({ name, description, image, detailsLink }) => {
  return (
    <div className="project">
      <a href={detailsLink} className="project-link">
        <img src={image} alt={`${name} Image`} />
        <h2>{name}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
};

const Portfolio = () => {
  const projectsData = [
    { name: 'NBA Highlight Generator', description: 'Convolutional Neural Network for Sports Highlight Automation', image: basketball, detailsLink: 'project1-details.html' },
    { name: 'Code Runner: an AI Education Platform', description: 'Educational game to teach children coding in Python', image: runner, detailsLink: 'project2-details.html' },
    { name: 'The GymBros App', description: 'Coordinating workouts among friends', image: barball, detailsLink: 'project2-details.html' },
    { name: 'This website!', image: web}
    ];

  return (
    <div id="portfolio" className="portfolio">
      <h1>Here's some of my projects 👇</h1>
      <div className="portfolio">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};


export default Portfolio;