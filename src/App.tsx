import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Resume from './pages/Resume.tsx';
import Contact from './pages/Contact.tsx';
import { PageType } from './types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: PageType) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
    }, 150);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home />;
      case 'PROJECTS':
        return <Projects />;
      case 'RESUME':
        return <Resume />;
      case 'CONTACT':
        return <Contact />
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
      <div className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
