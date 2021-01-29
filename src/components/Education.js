import React from 'react';
import InfoCard from './InfoCard';
import education from '../data/education.json';
import '../styles/styles.css';

const showExperience = () => {
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
const Experience = () => {
  return <div class="grid-items">{showExperience()}</div>;
};

export default Experience;
