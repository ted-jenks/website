import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation.tsx';
import Projects from './pages/Projects.tsx';
import { PageType } from './types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('PROJECTS');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'PROJECTS':
        return <Projects />;
      case 'HOME':
        return <h1>HOME</h1>;
      case 'RESUME':
        return <h1>RESUME</h1>;
      case 'CONTACT':
        return <h1>CONTACT</h1>;
      default:
        return <h1>HOME</h1>;
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;