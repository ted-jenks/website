import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation.tsx';
import { PageType } from './types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
      <div className="content">
        <h1>Current Page: {currentPage}</h1>
      </div>
    </div>
  );
}

export default App;