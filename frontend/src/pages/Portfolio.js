import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="project-grid">
        <div className="project-card">
          <img src="https://unsplash.com/photos/a-close-up-of-a-laptop-on-a-desk-pypeCEaJeZY" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Short description of project 1.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <img src="https://www.pexels.com/photo/macbook-pro-and-iphone-on-brown-wooden-table-1029757/" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Short description of project 2.</p>
          <button>View Project</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;