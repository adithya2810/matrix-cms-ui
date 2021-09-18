import React, { FC, ReactNode } from 'react';

type propsType = {
  title: ReactNode;
  pageType: String;
};

const HeroSection: FC<propsType> = ({ title, pageType }) => {
  return (
    <>
      <div className={`listing-hero-section overlay`} style={{ height: '463px', backgroundImage: 'url(/images/matrix-websitebanner-media1.jpg)' }}>
        <div className="title section laptop:ml-40 laptop:mt-20 laptop:mb-12">
          {title}
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
