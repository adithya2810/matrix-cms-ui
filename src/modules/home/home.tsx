import React from 'react';
import HomeContent from './homeContent';
import HomeCarousal from './homeCarousal';
import HomeFounder from './homeFounder';

const Home: React.FC = () => {
  return (
    <div className="bg-secondary-light home-container">
      <HomeFounder />
      <HomeCarousal />
      <h4 className="home-content-container-title">
        {' '}
        Scroll through for the latest from the{' '}
        <span className="text-accent">Matrix Moments </span> series ...{' '}
      </h4>
      <HomeContent />
    </div>
  );
};

export default Home;
