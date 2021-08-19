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
  const [blogCount, setBlogCount] = useState(null);
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
          date
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

      setBlogDetails(gfql_data.data.blogs[0])

      let relatedVideosArr = [];
      const dataRelatedVideos = gfql_data.data.blogs[0]?.tags
      dataRelatedVideos.forEach(d => {
        relatedVideosArr.push(...d.blogs)
      });
      relatedVideosArr = _.uniqWith(relatedVideosArr, _.isEqual);
      setRelatedVideos(relatedVideosArr.slice(0, 4))

      setBlogCount({
        article: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Article`)).json(),
        audio: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Audio`)).json(),
        video: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Video`)).json(),
      });

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
          <SearchMoreLaptop {...props} blogCount={blogCount} />
          :
          <SearchMoreMobile {...props} blogCount={blogCount} />}
      </div>
    </div>
  )
}

export default BlogDetails
