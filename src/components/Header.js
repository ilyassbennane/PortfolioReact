import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faCode, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 10px',
    position: 'relative',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid white',
  };

  return (
    <div
      style={{
        textAlign: 'center',
        background: '#446688',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
        Home
      </Link>
      <Link to="/education" style={linkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '5px' }} />
        Education
      </Link>
      <Link to="/projects" style={linkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} />
        Projects
      </Link>
      <Link to="/certifications" style={linkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faCertificate} style={{ marginRight: '5px' }} />
        Certification
      </Link>
      <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
        Contact
      </Link>
    </div>
  );
};

export default Header;
