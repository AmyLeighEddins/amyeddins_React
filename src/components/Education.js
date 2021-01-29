import React from 'react';
import InfoCard from './InfoCard';
import education from '../data/education.json';
import '../styles/styles.css';

const Experience = () => {
  return education.map((edu, index) => {
    return (
      <InfoCard
        image={edu.imageUrl}
        name={edu.school}
        dates={edu.dates}
        description={edu.description}
        details={`${edu.location} - ${edu.degree}`}
        key={index}
      />
    );
  });
};

export default Experience;
