import React from 'react';
import { ParticleExplosion } from '../ParticleExplosion/ParticleExplosion.tsx';
import './ResumeCard.css';

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
  keyImpact: string[];
}

interface ResumeCardProps {
  experience: Experience;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ experience }) => {
  return (
    <ParticleExplosion>
      <div className="resume-card">
        <div className="resume-header">
          <div className="resume-title-section">
            <h3 className="resume-title">{experience.title}</h3>
            <p className="resume-company">{experience.company}</p>
          </div>
          <p className="resume-dates">{experience.dates}</p>
        </div>
        <div className="resume-content">
          <p className="resume-description">{experience.description}</p>
          <div className="resume-impact">
            <h4 className="impact-title">Key Points</h4>
            <ul className="impact-list">
              {experience.keyImpact.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ParticleExplosion>
  );
};

export default ResumeCard;
