import React from 'react';
import './Testimonials.css';
import Flip from 'react-reveal/Flip';

const testimonials = [
  { name: "John Doe", feedback: "Thresh Tech AI transformed our business operations with their AI solutions." },
  { name: "Jane Smith", feedback: "Their team is incredibly skilled and delivered beyond our expectations." },
  { name: "Michael Brown", feedback: "Highly recommend Thresh Tech AI for any AI-driven projects!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Flip key={index} left>
            <div className="testimonial-card">
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          </Flip>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
