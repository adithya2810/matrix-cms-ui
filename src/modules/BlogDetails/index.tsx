import SearchMoreLaptop from '@components/SearchMoreLaptop';
import SearchMoreMobile from '@components/SearchMoreMobile';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import Blog from './Blog';
import HeroSection from './HeroSection';
import RelatedVideos from './RelatedVideos';
import SideContent from './SideContent';
import _ from "lodash";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

interface BlogProvider {
  content: string;
  content_type: {
    name: string;
  };
  youtube_embed: string;
};

const BlogDetails: FC<propsType> = (props) => {
  const { query: { slug } } = useRouter()
  const [blogDetails, setBlogDetails] = useState<BlogProvider>()
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    fetchData(slug)
  }, [slug])

  const fetchData = async (slug) => {
    try {
      const SINGLE_BLOG = `query ($slug: String!){
        blogs(where:{slug: $slug}){
          FeaturedOne
          FeaturedTwo
          author {
            createdAt
            currentinvest
            description
            designation
            image_url
            linkedin
            name
            pastinvset
            published_at
            slug
            twitter
            type
          }
          content
          content_type {
            name
            slug
          }
          cover_desktop
          cover_image_mobile
          name
          published_at
          readtime
          slug
          tags {
            name
            slug
            blogs {
              _id
              FeaturedOne
              FeaturedTwo
              displaytag
              author {
                designation
                image_url
                name
                slug
              }
              content_type {
                name
                slug
              }
              cover_desktop
              cover_image_mobile
              name
              readtime
              slug
              tags {
                name
                slug
              }
              youtube_embed
            }
          }
          updatedAt
          youtube_embed
          audioboomembed
        }
      }`;

      const gfql = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/graphql`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: SINGLE_BLOG, variables: { slug: slug } })
      });

      const gfql_data = await gfql.json();
      // console.log("gfl", gfql_data);

      setBlogDetails(gfql_data.data.blogs[0])

      // const resBlogs = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?slug=${slug}`)
      // const dataBlogs = await resBlogs.json();
      // setBlogDetails(dataBlogs?.[0])

      // const tags = gfql_data.data.blogs[0]?.tags.map(t => `slug=${t.slug}`)?.join('&')
      // const resRelatedVideos = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?${tags}&_limit=4`)
      let relatedVideosArr = [];
      const dataRelatedVideos = gfql_data.data.blogs[0]?.tags
      // const dataRelatedVideos = await resRelatedVideos.json()
      dataRelatedVideos.forEach(d => {
        relatedVideosArr.push(...d.blogs)
      });
      relatedVideosArr = _.uniqWith(relatedVideosArr, _.isEqual);
      setRelatedVideos(relatedVideosArr.slice(0, 4))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='blog-detail'>
      <HeroSection {...props} blogDetails={blogDetails} />
      <div className="laptop:grid laptop:grid-cols-12 w-full section relative" style={props.deviceType.mobile ? {} : { padding: '0 60px' }}>
        <SideContent {...props} blogDetails={blogDetails} relatedVideos={relatedVideos} />
        <Blog {...props} blogDetails={blogDetails} />
        {props.deviceType.mobile &&
          <RelatedVideos mobile={props.deviceType.mobile} relatedVideos={relatedVideos} />
        }
        {!props.deviceType.mobile ?
          <SearchMoreLaptop {...props} />
          :
          <SearchMoreMobile {...props} />}
      </div>
    </div>
  )
}

export default BlogDetails
