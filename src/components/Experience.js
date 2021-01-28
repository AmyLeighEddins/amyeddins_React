import React from 'react';
import JobCard from './JobCard';
import jobs from '../data/jobs.json';
import '../styles/styles.css';

const Experience = () => {
  return jobs.map((job) => {
    return (
      <JobCard
        image={job.imageUrl}
        name={job.name}
        dates={job.dates}
        location={job.location}
        description={job.description}
        position={job.position}
      />
    );
  });
};

export default Experience;
