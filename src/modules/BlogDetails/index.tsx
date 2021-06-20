import SearchMoreLaptop from '@components/SearchMoreLaptop';
import SearchMoreMobile from '@components/SearchMoreMobile';
import React, { FC } from 'react'
import Blog from './Blog';
import HeroSection from './HeroSection';
import RelatedVideos from './RelatedVideos';
import SideContent from './SideContent';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogDetails: FC<propsType> = (props) => {
  return (
    <div className='blog-detail'>
      <HeroSection {...props} />
      <div className="laptop:grid laptop:grid-cols-11 w-full section">
        <SideContent {...props} />
        <Blog {...props} />
        {props.deviceType.mobile &&
          <RelatedVideos mobile={props.deviceType.mobile} />
        }
      </div>
      {!props.deviceType.mobile ?
        <SearchMoreLaptop {...props} />
        :
        <SearchMoreMobile {...props} />}
    </div>
  )
}

export default BlogDetails
