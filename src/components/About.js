import React from 'react';
import '../styles/styles.css';
import data from '../data/about.json';

const About = () => {
  return (
    <div className="appBarSpace">
      <h1 className="title">Hi! Amy here.</h1>
      {data.aboutme.map((info, index) => {
        return (
          <p className="info" key={index}>
            {info}
          </p>
        );
      })}
    </div>
  );
};

export default About;
