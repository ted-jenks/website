import React from 'react';
import { NavigationProps, PageType } from '../../types';
import './Navigation.css';

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const pages: PageType[] = ['HOME', 'PROJECTS', 'RESUME', 'CONTACT'];

  return (
    <nav className="navigation">
      {pages.map((page) => (
        <button
          key={page}
          className={`nav-item ${currentPage === page ? 'active' : ''}`}
          onClick={() => onNavigate(page)}
        >
          {page}
        </button>
      ))}
    </nav> 
  );
};

export default Navigation;