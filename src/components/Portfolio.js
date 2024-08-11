import React from 'react';
import './Portfolio.css';
import Fade from 'react-reveal/Fade';

const projects = [
  { title: "Project Alpha", description: "AI-driven predictive analytics system.", img: "project1.jpg" },
  { title: "Project Beta", description: "Automated data processing pipeline.", img: "project2.jpg" },
  { title: "Project Gamma", description: "Intelligent customer service chatbot.", img: "project3.jpg" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Fade key={index} bottom>
            <div className="portfolio-card">
              <img src={project.img} alt={project.title} />
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
