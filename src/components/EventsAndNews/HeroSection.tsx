import React, { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <>
      <div className={`listing-hero-section overlay`}>
        <div className="title section">
          <h2>
            Past Events
          </h2>
        </div>
        <div className="info">
          <p className="body1">
            Use the filter panel to find your specific topic of interest
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
