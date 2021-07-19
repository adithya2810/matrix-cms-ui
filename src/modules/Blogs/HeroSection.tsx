import React, { FC } from 'react';

const HeroSection: FC<{ mobile: Boolean }> = ({ mobile }) => {

  return (
    <>
      <div className={`listing-hero-section overlay`}>
        <div className="title section laptop:ml-40 laptop:mt-20">
          <h2 style={!mobile ? { fontSize: 105, lineHeight: '120px' } : {}}>
            The Matrix <br /> Moments Series
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
