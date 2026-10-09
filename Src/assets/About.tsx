import React from 'react';
import { personalData } from './portafolio';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <h2>Sobre Mí</h2>
      <p>{personalData.presentacion}</p>
      
      <div className="stats-container">
        {personalData.stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
