import React from 'react';
import './ProjectCard.css';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleClick = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;