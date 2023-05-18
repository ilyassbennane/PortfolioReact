import React from 'react';

const AboutMe = () => {
  const header = (
    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '10px', textAlign: 'center' }}>I am Ilyass Bennane</h2>
  );

  const containerStyle = {
    backgroundColor: 'white',
    padding: '18px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const imageContainerStyle = {
    marginRight: '20px',
  };

  const imageStyle = {
    width: '480px',
    height: '550px',
  };

  const description = (
    <p style={{ color: '#666' }}>
      I am a student with a passion for web development. I enjoy building interactive and engaging web applications
      using the latest technologies. My goal is to continuously learn and grow as a developer and contribute to
      meaningful projects.
    </p>
  );

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="profile.png" alt="Profile" style={imageStyle} />
      </div>
      <div>
        {header}
        {description}
      </div>
    </div>
  );
};

export default AboutMe;
