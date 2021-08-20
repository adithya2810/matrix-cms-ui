import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
};

const HeroSection: FC<propsType> = ({ deviceType, blogDetails }) => {
  const getImage = (data) => {
    if (data?.blog_details_image) {
      if (deviceType.mobile) {
        return data?.cover_image_mobile;
      } else
        return data?.blog_details_image.url;
    } else {
      return !deviceType.mobile ? data?.cover_desktop : data?.cover_image_mobile;
    }
  }
  // const imgPath = !deviceType.mobile ? blogDetails?.cover_desktop : blogDetails?.cover_image_mobile

  return (
    <>
      <div className='overlay hero-section bg-cover relative bg-center section flex items-center' style={{ backgroundImage: `url(${getImage(blogDetails)})`, height: deviceType.mobile ? 370 : 463, zIndex: 0, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
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
