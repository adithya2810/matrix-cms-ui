import React, { FC } from 'react';

const HeroSection: FC<{ mobile: Boolean }> = ({ mobile }) => {

  return (
    <>
      <div className={`listing-hero-section overlay`} style={mobile ? { height: '69vh' } : { height: '51vh' }}>
        <div className="title section laptop:ml-40 laptop:mt-20 laptop:mb-12">
          <h2 style={!mobile ? { lineHeight: '6.5rem', fontWeight: 400, fontSize: '6rem', letterSpacing: -2.5 } : {}}>
            The Matrix <br /> Moments Series
          </h2>
        </div>
        <div className="info Manrope-normal" style={mobile ? { width: 235, fontWeight: 500, fontSize: 14, lineHeight: 18, letterSpacing: 1 } : { width: 320 }}>
          <p className="body1">
            Use the filter panel to find your specific topic of interest
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
