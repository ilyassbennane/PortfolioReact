import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-wrapper">
      <div>
        <h2 className="contact-title">Contact Me</h2>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="p-field">
            <label htmlFor="name">Name:</label>
            <InputText id="name" type="text" />
          </div>
          <div className="p-field">
            <label htmlFor="email">Email:</label>
            <InputText id="email" type="email" />
          </div>
          <Button label="Submit" type="submit" className="p-button-rounded p-button-primary" />
        </form>
      </div>
      <div className="social-contact">
        <h3>Connect with me:</h3>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ilyass-bennane-739aa1250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/ilyassbennane"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
