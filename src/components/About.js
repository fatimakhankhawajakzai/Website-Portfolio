import React from 'react';
import './About.css';
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Bounce>
        <h2>About Thresh Tech AI</h2>
        <p>
          Thresh Tech AI is at the forefront of technological innovation, providing cutting-edge AI solutions for a variety of industries. Our mission is to drive progress through intelligent systems and advanced algorithms that make a real difference.
        </p>
      </Bounce>
    </section>
  );
}

export default About;
