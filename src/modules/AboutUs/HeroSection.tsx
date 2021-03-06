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
    img: '/icons/raybay.png',
    logo: '/icons/ola.svg'
  },
  {
    text: 'Not once during these years of association that I have had with Matrix, have I ever felt them as an outsider. They have been with us through the thick and thin of things.',
    by: '<b>Mr.</b> Lakshmipathy',
    img: '/icons/floriane-vita.png',
    logo: '/icons/mx-logos-five-star 1.svg'
  },
  {
    text: 'Our journey with Matrix has been of pure partnership over the past nine years. We have worked closely on all aspects of business be it growing & pivoting business, acquiring companies, hiring talent, fund raise so on and so forth.',
    by: '<b>Umang</b> Bedi<br/><b>Virendra</b> Gupta',
    img: '/icons/dailyhunt-bg.png',
    logo: '/icons/dailyhunt-logo.png'
  },
  {
    text: 'Matrix has always believed in our mission. It has been our immense pleasure to have Matrix back us from the start of our journey.  Their willingness to mentor, ideate and contribute to our business and growth has been unparalleled.',
    by: '<b>Mr. Vineet</b> Rao<br/><b>Mr. Sourjyendu</b> Medda',
    img: '/icons/Sourjyende-Rajat-Vinnet-bg.png',
    logo: '/icons/Dealshare-logo-white.png'
  },
  {
    text: 'Matrix came on board at an early stage of our journey, and the support received has been truly invaluable! We couldn’t have asked for a better partner to build one of the world’s most loved tech-enabled managed living company.',
    by: '<b>Anindya</b> Dutta<br/><b>Sandeep</b> Dalmia',
    img: '/images/about-us/1-laptop.png',
    logo: '/icons/Stanza_Living_Logo_3x_W 1.svg'
  },
  {
    text: 'I fondly remember the many midnight calls we’ve had while we worked relentlessly to build Practo. They’ve worked with us like a startup themselves and were always there when needed.',
    by: '<b>SHASHANK</b> N.D.',
    img: '/images/about-us/1-laptop.png',
    logo: '/icons/practo.png'
  },
  {
    text: 'I have always found Matrix to be a great partner in our journey - strategic in thinking and yet connected to the realities of execution. Its a great combo that is hard to beat!',
    by: '<b>PRANAY</b> CHULET',
    img: '/images/about-us/1-laptop.png',
    logo: '/icons/quikr_logo.png'
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
      <Carousel autoPlay={false} showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={6000} stopOnHover={false} transitionTime={1000} centerMode={false}>
        {sliders.map((ele, i) => (
          // <div key={i} className={`overlay bg-cover relative section flex items-center`} style={{ backgroundImage: `url(${ele.img})`, height: '80vh', backgroundSize: deviceType.mobile ? 'cover' : 'auto', zIndex: 0 }}>
          <div key={i} className={`overlay bg-cover relative section flex items-center`} style={{ backgroundImage: `url(${ele.img})`, height: deviceType.mobile ? '80vh' : 'calc(100vh - 325px)', backgroundSize: deviceType.mobile ? 'cover' : 'auto', zIndex: 0 }}>
            <div className="text-white relative top-10 sm:top-14 flex flex-col justify-center" style={{ textAlign: 'start', height: deviceType.mobile ? '70%' : '100%' }}>
              {/* <h3 className='opacity-40 mb-10 sm:mb-16 slider-num-ma'>{i > 8 ? (i + 1) : `0${i + 1}`}/{sliders.length > 9 ? sliders.length : `${sliders.length}`}</h3> */}
              {/* <h5 className='relative mb-10 sm:mb-9 ma-slider-fix text-6xl sm:text-lg leading-snug sm:leading-6 sm:font-light' style={deviceType.mobile ? { textIndent: '3rem' } : { fontSize: 35, lineHeight: '45px', textIndent: '6rem', zIndex: 1 }}> */}
              <h5 className='relative mb-2 sm:mb-9 ma-slider-fix text-6xl sm:text-lg leading-snug sm:leading-6 sm:font-light' style={deviceType.mobile ? { textIndent: '3rem' } : { fontSize: '4vh', lineHeight: '5vh', textIndent: '4.5rem', marginBottom: '2vh', zIndex: 1 }}>
                {/* <img className="absolute -top-10 sm:-top-3 left-0 h-20 w-20 sm:h-8" style={deviceType.mobile ? { width: '2rem', zIndex: -1 } : { width: '5rem', zIndex: -1 }} src="/quote-mark.png" /> */}
                <img className="absolute -top-7 sm:-top-3 left-0 h-14 w-14 sm:h-8" style={deviceType.mobile ? { width: '2rem', zIndex: -1 } : { width: '4rem', zIndex: -1 }} src="/quote-mark.png" />
                {ele.text}
              </h5>
              <h6 className="font-normal leading-normal sm:text-sm" dangerouslySetInnerHTML={{ __html: ele.by }} style={deviceType.mobile ? { letterSpacing: 0.1 } : { fontSize: '4vh', lineHeight: '5vh' }}></h6>
              <img className="absolute bottom-0 right-0" src={ele.logo} style={deviceType.mobile ? { width: 60 } : { display: 'none' }} />
            </div>
            <img className="absolute bottom-12 right-8" src={ele.logo} style={deviceType.mobile ? { display: 'none', } : { width: 100 }} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSection;
