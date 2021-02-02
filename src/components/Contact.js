import React from 'react';
import '../styles/styles.css';

const Contact = ({ href, title, icon }) => {
  return (
    <a href={href} title={title} target="_blank" rel="noopener noreferrer">
      <i class={`${icon} icon`}></i>
    </a>
  );
};

export default Contact;
