import React from 'react';
import InfoCard from './InfoCard';
import jobs from '../data/jobs.json';
import '../styles/styles.css';

const showExperience = () => {
  return jobs.map((job, index) => {
    return (
      <InfoCard
        image={job.imageUrl}
        name={job.name}
        dates={job.dates}
        location={job.location}
        description={job.description}
        details={`${job.location} - ${job.title} - ${job.position}`}
        key={index}
      />
    );
  });
};

const Experience = () => {
  return <div class="grid-items">{showExperience()}</div>;
};

export default Experience;
