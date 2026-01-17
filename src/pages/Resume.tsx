import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import ResumeCard, { Experience } from '../components/ResumeCard/ResumeCard.tsx';
import './Resume.css';

const Resume: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  const loadResume = async () => {
    try {
      const response = await fetch('/resume.yaml');
      const text = await response.text();
      const data = yaml.load(text);
      
      if (Array.isArray(data)) {
        setExperiences(data as Experience[]);
      } else {
        console.error('YAML data is not an array:', data);
        setExperiences([]);
      }
    } catch (error) {
      console.error('Error loading resume:', error);
      setExperiences([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  if (loading) {
    return <div className="resume-page">Loading resume...</div>;
  }

  return (
    <div className="resume-page">
      <div className="resume-list">
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <ResumeCard key={index} experience={experience} />
          ))
        ) : (
          <p>No experience found.</p>
        )}
      </div>
    </div>
  );
};

export default Resume;
