import React from 'react';
import '../styles/styles.css';

const Contact = ({ href, title, icon }) => {
  return (
    <a href={href} title={title}>
      <i class={`${icon} icon`}></i>
    </a>
  );
};

export default Contact;
