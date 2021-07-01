import SearchMoreLaptop from '@components/SearchMoreLaptop';
import SearchMoreMobile from '@components/SearchMoreMobile';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
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
  const { query: { slug } } = useRouter()
  const [blogDetails, setBlogDetails] = useState({})
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    fetchData(slug)
  }, [slug])

  const fetchData = async (slug) => {
    try {
      const resBlogs = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?slug=${slug}`)
      const dataBlogs = await resBlogs.json();
      setBlogDetails(dataBlogs?.[0])
      const tags = dataBlogs?.[0]?.tags.map(t => `slug=${t.slug}`)?.join('&')
      const resRelatedVideos = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?${tags}&_limit=4`)
      const relatedVideosArr = [];
      const dataRelatedVideos = await resRelatedVideos.json()
      dataRelatedVideos.forEach(d => {
        relatedVideosArr.push(...d.blogs)
      });
      setRelatedVideos(relatedVideosArr.slice(0, 4))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='blog-detail'>
      <HeroSection {...props} blogDetails={blogDetails} />
      <div className="laptop:grid laptop:grid-cols-11 w-full section">
        <SideContent {...props} blogDetails={blogDetails} relatedVideos={relatedVideos} />
        <Blog {...props} blogDetails={blogDetails} />
        {props.deviceType.mobile &&
          <RelatedVideos mobile={props.deviceType.mobile} relatedVideos={relatedVideos} />
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
