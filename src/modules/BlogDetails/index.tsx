import SearchMoreLaptop from '@components/SearchMoreLaptop';
import SearchMoreMobile from '@components/SearchMoreMobile';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import Blog from './Blog';
import HeroSection from './HeroSection';
import RelatedVideos from './RelatedVideos';
import SideContent from './SideContent';
import _ from "lodash";
import SocialMetaTags from '@components/SocialMetaTags';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  blogDetails: any;
  relatedVideos: any;
  blogCount: any;
};

const BlogDetails: FC<propsType> = (props) => {
  const { query: { slug } } = useRouter()
  const blogDetails = props.blogDetails;
  const relatedVideos = props.relatedVideos;
  const blogCount = props.blogCount;

  const getImage = (data) => {
    if (data?.blog_details_image) {
      if (props.deviceType.mobile) {
        return data?.cover_image_mobile;
      } else
        return data?.blog_details_image.url;
    } else {
      return !props.deviceType.mobile ? data?.cover_desktop : data?.cover_image_mobile;
    }
  }

  return (<>
    {blogDetails && <SocialMetaTags title={blogDetails.name ? blogDetails.name : ''} description={blogDetails.content ? blogDetails.content : ''} image={getImage(blogDetails)} />}
    <div className='blog-detail'>
      <HeroSection {...props} blogDetails={blogDetails} />
      <div className="laptop:grid laptop:grid-cols-12 w-full section relative" style={props.deviceType.mobile ? {} : { padding: '0 60px' }}>
        <SideContent {...props} blogDetails={blogDetails} relatedVideos={relatedVideos} />
        <Blog {...props} blogDetails={blogDetails} />
        {props.deviceType.mobile &&
          <RelatedVideos mobile={props.deviceType.mobile} relatedVideos={relatedVideos} />
        }
        {!props.deviceType.mobile ?
          <SearchMoreLaptop {...props} blogCount={blogCount} />
          :
          <SearchMoreMobile {...props} blogCount={blogCount} />}
      </div>
    </div>
  </>)
}

export default BlogDetails
