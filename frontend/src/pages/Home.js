import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Discover my projects and skills.</p>
          <button>View Portfolio</button>
        </div>
      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img src="https://unsplash.com/photos/a-close-up-of-a-laptop-on-a-desk-pypeCEaJeZY" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of project 1.</p>
          </div>
          <div className="project-card">
            <img src="https://www.pexels.com/photo/macbook-pro-and-iphone-on-brown-wooden-table-1029757/" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of project 2.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;