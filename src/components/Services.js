import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { title: "AI Development", description: "Creating intelligent systems that adapt and learn." },
  { title: "Data Analysis", description: "Turning raw data into actionable insights." },
  { title: "Machine Learning", description: "Building models that predict and automate tasks." },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
