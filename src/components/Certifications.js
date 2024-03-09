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
      title: 'Frontend Developer (React)',
      description: 'Skilled in React for dynamic UIs. Ready to contribute to innovative frontend development.',
      image: 'frontend_developer_react.png',

    },
    // Add more certifications as needed
  ];

  const certificationTemplate = (certification) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Card title={certification.title} className="custom-card" style={{ boxShadow: 'none' }}>
          <img
            src={certification.image}
            alt={certification.title}
            style={{ maxWidth: '260px', height: 'auto' }} // Adjusted dimensions for smaller images
          />
          <p>{certification.description}</p>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '8px', fontSize: '28px', padding: '20px' }}>Certifications</h2>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <Carousel
          value={certifications}
          itemTemplate={certificationTemplate}
          activeIndex={activeIndex} // Set the active index
          onChange={(e) => setActiveIndex(e.index)} // Update the active index on change
        />
      </div>
    </div>
  );
};

export default Certifications;
