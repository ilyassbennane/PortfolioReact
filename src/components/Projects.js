import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { useSpring, animated } from 'react-spring';

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 *//* import {faLaravel, faReact, faPython, faAlgolia, faGoogle, faJava } from '@fortawesome/free-brands-svg-icons';
 */
const Projects = () => {
  const projects = [
    {
      name: 'Crm Website',
      githubLink: 'https://github.com/Cherkani/-PFA-',
      details: 'An Ecommerce Website for handling customer relationship management and improving sales.',
      technologies: ['Laravel', 'MySql', 'Jquery'],
      image: 'project1.png',
      imageStyle: {
        width: '150px',
        height: '150px',
      },
    },
    {
      name: 'Pokemon',
      githubLink: 'https://github.com/ilyassbennane/pokemon',
      details: 'A Pokémon App that allows users to explore and discover information about various Pokémon species.',
      technologies: ['React', 'PokéAPI'],
      image: 'project2.png',
      imageStyle: {
        width: '150px',
        height: '150px',
      },
    },
    {
      name: 'Shortest Path',
      githubLink: 'https://github.com/Cherkani/fuel_short_path_first_project_python',
      details: 'An App for optimizing the fuel consumption of trucks by finding the shortest path for gas stations.',
      technologies: ['Python', 'Dijkstra Algorithm', 'Google Maps API'],
      image: 'project3.png',
      imageStyle: {
        width: '170px',
        height: '150px',
      },
    },
    
  ];

/*   const technologyIcons = {
    'Laravel-': faLaravel,
    'MySql-': faLaravel, // Example icon for MySql
    'Jquery': faJava, // Example icon for Jquery
    'React-': faReact, // Example icon for React
    'PokéAPI': faReact, // Example icon for PokéAPI
    'Python-': faPython, // Example icon for Python
    'Dijkstra Algorithm-': faAlgolia, // Example icon for Dijkstra Algorithm
    'Google Maps API': faGoogle, // Example icon for Google Maps API
  }; */

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [expandedTechnologiesIndex, setExpandedTechnologiesIndex] = useState(-1);

  const handleDetailsClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
    if (expandedTechnologiesIndex !== -1) {
      setExpandedTechnologiesIndex(-1);
    }
  };

  const handleTechnologiesClick = (index) => {
    setExpandedTechnologiesIndex(index === expandedTechnologiesIndex ? -1 : index);
    if (expandedIndex !== -1) {
      setExpandedIndex(-1);
    }
  };

  const animatedProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 200,
  });

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '8px', padding: '20px', fontSize: '28px' }}>
        Projects
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <animated.div key={index} style={animatedProps}>
            <Card
              title={<div style={{ textAlign: 'center', fontWeight: 'bold' }}>{project.name}</div>}
              className="project-card"
              style={{
                width: '300px',
                height: '550px',
                margin: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
            <div style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                style={{ ...project.imageStyle, objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxHeight: '200px',
                overflow: 'hidden',
              }}
            >
              <div style={{ marginBottom: '10px' }}>
                <Button
                  label="GitHub"
                  className="btn-sm mr-2"
                  style={{
                    width: '70px',
                    fontSize: '12px',
                    borderRadius: '20px',
                    background: '#007bff',
                    border: '1px solid #007bff',
                  }}
                  onClick={() => window.open(project.githubLink, '_blank')}
                />
                <Button
                  label={expandedIndex === index ? 'Hide' : 'Details'}
                  className=" btn-sm mr-2"
                  style={{
                    width: '70px',
                    fontSize: '12px',
                    borderRadius: '20px',
                    background: '#007bff',
                    border: '1px solid #007bff',
                  }}
                  onClick={() => handleDetailsClick(index)}
                />
                <Button
                  label={expandedTechnologiesIndex === index ? 'Hide' : 'Techs'}
                  className=" btn-sm"
                  style={{
                    width: '70px',
                    fontSize: '12px',
                    borderRadius: '20px',
                    background: '#007bff',
                    border: '1px solid #007bff',
                  }}
                  onClick={() => handleTechnologiesClick(index)}
                />
              </div>
              {expandedIndex === index && (
                <p style={{ marginTop: '10px', textAlign: 'justify' }}>{project.details}</p>
              )}
              {expandedTechnologiesIndex === index && (
                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}>
                  {project.technologies.map((technology, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={technology}
/*                       icon={<FontAwesomeIcon icon={technologyIcons[technology]} />}
 */                      className="p-mr-2"
                    />
                  ))}
                </div>
              )}
            </div>
            </Card>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
