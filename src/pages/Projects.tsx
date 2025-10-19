import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import ProjectCard, { Project } from '../components/ProjectCard/ProjectCard.tsx';
import './Projects.css';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const response = await fetch('/projects.yaml');
      const text = await response.text();
      const data = yaml.load(text);
      
      if (Array.isArray(data)) {
        setProjects(data as Project[]);
      } else {
        console.error('YAML data is not an array:', data);
        setProjects([]);
      }
    } catch (error) {
      console.error('Error loading projects:', error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading) {
    return <div className="projects-page">Loading projects...</div>;
  }

  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;