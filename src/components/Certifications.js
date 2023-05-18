import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index of the carousel

  const certifications = [
    {
      id: 1,
      title: 'Sql advanced certificate',
      description: 'Completed a comprehensive Sql development course',
      image: 'sql_advanced_certificate.png',
    },
    {
      id: 2,
      title: 'Java basic certificate',
      description: 'Achieved proficiency in Java programming',
      image: 'java_basic_certificate.png',
    },
    {
        id: 3,
        title: 'Python Fundamentals',
        description: 'Mastered Python programming, data manipulation, and problem-solving. Ready to develop dynamic applications and automate tasks.',
        image: 'PythonCertif.png',
      }      
    // Add more certifications as needed
  ];

  const certificationTemplate = (certification) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Card title={certification.title}>
          <img src={certification.image} alt={certification.title} style={{ maxWidth: '300px', height: 'auto' }} />
          <p>{certification.description}</p>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '8px', fontSize: '28px' }}>Certifications</h2>
      <Carousel
        value={certifications}
        itemTemplate={certificationTemplate}
        activeIndex={activeIndex} // Set the active index
        onChange={(e) => setActiveIndex(e.index)} // Update the active index on change
      />
    </div>
  );
};

export default Certifications;
