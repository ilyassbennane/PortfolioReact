import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faCode, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '10px',
    position: 'relative',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid white',
  };

  const navbarStyle = {
    backgroundColor: 'lightblue',
  };

  return (
    <Navbar style={navbarStyle} variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} to="/" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/education" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '5px' }} />
            Education
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faCode} style={{ marginRight: '5px' }} />
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/certifications" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faCertificate} style={{ marginRight: '5px' }} />
            Certification
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
            Contact
          </Nav.Link>
{/*           <Nav.Link as={Link} to="/Cv" style={linkStyle} activeStyle={activeLinkStyle}>
            <FontAwesomeIcon icon={faPrint} style={{ marginRight: '5px' }} />
            Cv
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
