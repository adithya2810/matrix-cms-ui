import React, { FC, ReactNode } from 'react';

type propsType = {
  title: ReactNode;
  pageType: String;
};

const HeroSection: FC<propsType> = ({ title, pageType }) => {
  return (
    <>
      <div className={`listing-hero-section overlay`}>
        <div className="title section laptopCustom:mt-20 laptopCustom:mb-12">
          {title}
        </div>
        <div className="info heroInfo">
          <p className="body1">
            Use the filter panel to find your specific topic of interest
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
