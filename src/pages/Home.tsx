import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-block">
        <h1 className="hero-name">TED JENKS</h1>
        <p className="hero-title">GROUP ENGINEERING LEAD @ PALANTIR</p>
        <p className="hero-philosophy">
          I am a Software Engineer.
        </p>
      </div>

      <div className="about-section">
        <div className="about-content">
          <p>
            I lead the Data Plane engineering group at Palantir, building modern data warehousing infrastructure 
            with a focus on <a href="https://www.palantir.com/interoperability/" target="_blank" rel="noopener noreferrer">modularity and interoperability</a>. This means deep integrations with other platforms, 
            unparalleled flexibility in <a href="https://www.palantir.com/docs/foundry/transforms-python/compute-engines" target="_blank" rel="noopener noreferrer">compute engine selection</a>, and adoption of <a href="https://www.palantir.com/docs/foundry/data-integration/iceberg-tables" target="_blank" rel="noopener noreferrer">Iceberg</a> as the core of our data
            layer. The movement has had huge impact in platform, reshaping some of the most established parts of 
            Foundry and AIP for an AI age.
          </p>
          <p>
            I built a <a href="https://www.palantir.com/docs/foundry/optimizing-pipelines/native-acceleration" target="_blank" rel="noopener noreferrer">native acceleration offering</a> for <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a> in Foundry that delivered a 39% speedup. I 
            oversaw/oversee over 5 million daily compute jobs. I championed and rearchitected our <a href="https://www.palantir.com/docs/foundry/transforms-python/duckdb/" target="_blank" rel="noopener noreferrer">single-node 
            compute engine offering</a> improving performance by an order of magnitude and driving adoption to 15% of 
            all jobs. I architected a backend-agnostic <a href="https://www.palantir.com/docs/foundry/sql-warehousing/furnace/" target="_blank" rel="noopener noreferrer">SQL engine</a> capable of routing queries through <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>, <a href="https://trino.io/" target="_blank" rel="noopener noreferrer">Trino</a>,
            or <a href="https://duckdb.org/" target="_blank" rel="noopener noreferrer">DuckDB</a>. Throughout, I've made deep stability investments that have kept our systems reliable at massive 
            scale.
          </p>
          <p>
            Outside of work, you'll find me exploring upstate NY with my wife and two dogs, testing the long list of
            NYC restaurant recommendations I have to get through, or reading (more likely listening to) a history
            book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;