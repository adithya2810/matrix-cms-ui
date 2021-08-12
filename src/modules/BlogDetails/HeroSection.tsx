import React, { FC, useState, } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
};

const HeroSection: FC<propsType> = ({ deviceType, blogDetails }) => {
  const imgPath = !deviceType.mobile ? blogDetails?.cover_desktop : blogDetails?.cover_image_mobile

  return (
    <>
      <div className='overlay hero-section bg-cover relative bg-center section flex items-center' style={{ backgroundImage: `url(${imgPath})`, height: deviceType.mobile ? 370 : 463, zIndex: 0, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
        <div className="laptop:grid laptop:grid-cols-12 w-full">
          <div className="col-span-4" />
          <div className="col-span-6 title text-white laptop:mt-2 sm:mt-14" style={!deviceType.mobile ? { fontSize: 65, fontWeight: 700, lineHeight: '80px' } : { fontSize: 40 }}>
            {blogDetails?.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
