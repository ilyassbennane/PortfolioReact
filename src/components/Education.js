import React, { useState } from 'react';
import Collapse from 'react-collapse';
import { Card } from 'primereact/card';

const educationStyles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  animatedCard: {
    position: 'relative',
    transformOrigin: 'top',
  },
  card: {
    padding: '0',
    margin: '0',
  },
  cardHeader: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    borderRadius: '8px 8px 0 0',
  },
  expandedCardHeader: {
    backgroundColor: '#e0e0e0',
  },
  cardTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Add this line
  },
  
  cardToggle: {
    fontSize: '20px',
  },
  cardDetails: {
    backgroundColor: '#fafafa',
    padding: '20px',
    marginTop: '10px',
    borderRadius: '0 0 8px 8px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  cardDetailsItem: {
    marginBottom: '10px',
  },
  cardDetailsStrong: {
    fontWeight: 'bold',
  },
  cardImage: {
    width: '150px',
    borderRadius: '8px',
    marginLeft: '20px',
  },
};

const Education = () => {
  const educationData = [
    {
      title: 'Cycle Ingenieur',
      institution: 'école nationale des sciences appliquées d eljadida',
      year: '2022-Present',
      description: 'Étudiant en 3ème année en Filière Ingénierie Informatique et technologie émergente',
      image: 'ensaj.png',
    },
    {
      title: 'Cycle Préparatoire',
      institution: 'école nationale des sciences appliquées d eljadida',
      year: '2020-2022',
      description: 'Deux années de Préparation Intégrée pour accéder au cycle ingénieur',
      image: 'ensaj.png',
    },
    {
      title: 'Baccalauréat Science Mathématique',
      institution: 'Complexe Scolaire Kamil',
      year: '2020',
      description: 'Obtention du baccalauréat en branche Science Mathématique avec mention très bien',
      image: 'Kamil.png',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleTitleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const renderEducationItems = () => {
    return educationData.map((education, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <Card
          className="education-card"
          style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
        >
          <div
            className={`education-card-header ${expandedIndex === index ? 'expanded' : ''}`}
            style={expandedIndex === index ? educationStyles.expandedCardHeader : {}}
            onClick={() => handleTitleClick(index)}
          >
            <div className="education-card-title" style={educationStyles.cardTitle}>
              <span>{education.title}</span>
            </div>
            <div className="education-card-toggle" style={educationStyles.cardToggle}>
              {expandedIndex === index ? '-' : '+'}
            </div>
          </div>
          <Collapse isOpened={expandedIndex === index}>
            <div className="education-card-details" style={educationStyles.cardDetails}>
              <div style={{ flex: '1' }}>
                <div style={educationStyles.cardDetailsItem}>
                  <strong style={educationStyles.cardDetailsStrong}>Institution:</strong> {education.institution}
                </div>
                <div style={educationStyles.cardDetailsItem}>
                  <strong style={educationStyles.cardDetailsStrong}>Year:</strong> {education.year}
                </div>
                <div style={educationStyles.cardDetailsItem}>
                  <strong style={educationStyles.cardDetailsStrong}>Description:</strong> {education.description}
                </div>
              </div>
              <img src={education.image} alt={education.title} style={educationStyles.cardImage} />
            </div>
          </Collapse>
        </Card>
      </div>
      
    ));
  };

  return (
    <div style={educationStyles.container}>
      <h2 style={educationStyles.heading}>Education</h2>
      {renderEducationItems()}
    </div>
  );
};

export default Education;
