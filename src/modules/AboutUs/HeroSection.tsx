import React, { FC, useState, } from 'react';
import { Carousel } from 'react-responsive-carousel';

const data = (isMobile) => ({
  text: 'Matrix has been an early backer of Ola Cabs mission and is a partner I can always count on! Matrix wears the mission of partner companies on their sleeves and are unabashed evangelists at all times.',
  by: '<b>BHAVISH</b> AGGARWAL',
  imgPath: !isMobile ? '../../images/about-us/1-laptop.png' : '../../images/about-us/1-mobile.png'
})

const sliders = [
  {
    text: 'Matrix has been an early backer of Ola Cabs mission and is a partner I can always count on! Matrix wears the mission of partner companies on their sleeves and are unabashed evangelists at all times.',
    by: '<b>BHAVISH</b> AGGARWAL',
    img: '/images/about-us/1-laptop.png',
    logo: '/icons/ola.svg'
  },
  {
    text: 'India’s #1 news & local language content application.',
    by: '<b>Umang</b> Bedi<br/><b>Virendra</b> Patel',
    img: '/icons/dailyhunt-bg.png',
    logo: '/icons/dailyhunt-logo.png'
  },
  {
    text: 'A specialized financial services company funding the people who were perceived to be unfundable.',
    by: '<b>Mr.</b> LAKSHIPATHY',
    img: '/icons/floriane-vita.png',
    logo: '/icons/mx-logos-five-star 1.svg'
  }
];

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HeroSection: FC<propsType> = ({ deviceType }) => {
  return (
    <>
      <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={6000} stopOnHover={false} transitionTime={1000} centerMode={false}>
        {sliders.map((ele, i) => (
          <div key={i} className={`overlay bg-cover relative section flex items-center`} style={{ backgroundImage: `url(${ele.img})`, height: '100vh', backgroundSize: deviceType.mobile ? 'cover' : 'auto', zIndex: 0 }}>
            <div className="text-white relative -top-24 sm:-top-14" style={{ textAlign: 'start' }}>
              <h3 className='opacity-40 mb-24 sm:mb-16 slider-num-ma'>{i > 8 ? (i + 1) : `0${i + 1}`}/{sliders.length > 9 ? sliders.length : `${sliders.length}`}</h3>
              <h5 className='mb-10 sm:mb-9 ma-slider-fix text-6xl sm:text-lg leading-snug sm:leading-6 sm:font-light'>"{ele.text}"</h5>
              <h6 className="font-normal leading-normal sm:text-sm" dangerouslySetInnerHTML={{ __html: ele.by }} style={deviceType.mobile ? { letterSpacing: 0.1 } : {}}></h6>
              <img className="absolute bottom-0 right-0" src={ele.logo} style={deviceType.mobile ? { width: 50 } : { display: 'none' }} />
            </div>
            <img className="absolute bottom-12 right-8" src={ele.logo} style={deviceType.mobile ? { display: 'none', } : { width: 70 }} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSection;
