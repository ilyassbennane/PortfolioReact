import React from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.css';

const AboutMe = () => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: '18px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '10px',
    height: '100%',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    color: '#666',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const description = (
    <p style={descriptionStyle}>
      I am a student with a passion for web development. I enjoy building interactive and engaging web applications
      using the latest technologies. My goal is to continuously learn and grow as a developer and contribute to
      meaningful projects.
    </p>
  );

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 500 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 500 },
  });

  const downloadCv = () => {
    // Replace 'cv.pdf' with the actual filename and extension of your CV file
    const cvFile = 'CV_Ilyass.pdf';
  
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = cvFile;
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Simulate a click event to trigger the download
    link.click();
  
    // Remove the temporary link from the document body
    document.body.removeChild(link);
  };

  return (
    <animated.div className="container" style={containerStyle}>
      <div className="row">
        <animated.div className="col-md-4" style={imageAnimation}>
          <img src="profile.png" alt="Profile" style={imageStyle} />
        </animated.div>
        <animated.div className="col-md-8 align-self-center" style={textAnimation}>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>I am Ilyass Bennane</h2>
          {description}
          <button className="btn btn-primary" onClick={downloadCv}>Download CV</button>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default AboutMe;
