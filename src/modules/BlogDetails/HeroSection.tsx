import React, { FC, useState, } from 'react';
import { Carousel } from 'react-responsive-carousel';



type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HeroSection: FC<propsType> = ({ deviceType }) => {
  const imgPath = !deviceType.mobile ? '../../images/blog-details/1-laptop.png' : '../../images/about-us/1-mobile.png'

  return (
    <>
      <div className='overlay hero-section bg-cover relative bg-center section flex items-center' style={{ backgroundImage: `url(${imgPath})`, height: deviceType.mobile ? 413 : 463, zIndex: 0 }}>
        <div className="laptop:grid laptop:grid-cols-11 w-full">
          <div className="col-span-3" />
          <div className="col-span-8 title text-white laptop:mt-24 sm:mt-14">
            The Hack Job – hacking the way to growth and profits!
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
