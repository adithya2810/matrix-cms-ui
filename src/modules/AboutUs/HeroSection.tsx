import React, { FC, useState, } from 'react';
import { Carousel } from 'react-responsive-carousel';

const data = (isMobile) => ({
  text: 'Matrix has been an early backer of Ola Cabs mission and is a partner I can always count on! Matrix wears the mission of partner companies on their sleeves and are unabashed evangelists at all times.',
  by: 'BHAVISH AGGARWAL',
  imgPath: !isMobile ? '../../images/about-us/1-laptop.png' : '../../images/about-us/1-mobile.png'
})


type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HeroSection: FC<propsType> = ({ deviceType }) => {
  const [slideCount, setSlideCount] = useState(1)

  return (
    <>
      <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={6000} stopOnHover={false} transitionTime={1000} centerMode={false} onChange={index => setSlideCount(index + 1)}>
        <div className={`overlay bg-cover relative section flex items-center`} style={{ backgroundImage: `url(${data(deviceType.mobile).imgPath})`, height: deviceType.mobile ? 823 : 1080, zIndex: 0 }}>
          <div className="text-white relative -top-24" style={{ textAlign: 'start' }}>
            <h3 className='opacity-40 mb-24'>0{slideCount}/05</h3>
            <h5 className='mb-10'>{data(deviceType.mobile).text}</h5>
            <h6>{data(deviceType.mobile).by}</h6>
          </div>
        </div>
        <div className={`overlay bg-cover relative section flex items-center`} style={{ backgroundImage: `url(${data(deviceType.mobile).imgPath})`, height: deviceType.mobile ? 823 : 1080, zIndex: 0 }}>
          <div className="text-white relative -top-24" style={{ textAlign: 'start' }}>
            <h3 className='opacity-40 mb-24'>0{slideCount}/05</h3>
            <h5 className='mb-10'>{data(deviceType.mobile).text}</h5>
            <h6>{data(deviceType.mobile).by}</h6>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HeroSection;
