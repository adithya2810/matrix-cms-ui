import React, { FC, ReactNode } from 'react';

type propsType = {
  title: ReactNode;
  pageType: String;
};

const HeroSection: FC<propsType> = ({ title, pageType }) => {
  return (
    <>
      <div className={`listing-hero-section overlay`}>
        <div className="title section">{title}</div>
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
