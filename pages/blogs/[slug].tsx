import React, { FC } from 'react'
import BlogDetails from '@modules/BlogDetails'
import _ from "lodash";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  blogDetails: any;
  relatedVideos: any;
  blogCount: any;
};

const BlogDetailsPage: FC<propsType> = (props) => {
  return (<>
    <BlogDetails {...props} />
  </>)
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;

  const SINGLE_BLOG = `query ($slug: String!){
    blogs(where:{slug: $slug}){
      FeaturedOne
      FeaturedTwo
      blog_details_image {
        url
        formats
      }
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

  const blogCount = {
    article: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Article`)).json(),
    audio: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Audio`)).json(),
    video: await (await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count?content_type.name=Video`)).json(),
  };

  if (!gfql_data || gfql_data.data.blogs.length == 0) {
    return {
      notFound: true
    }
  }

  const blogDetails = gfql_data.data.blogs[0];

  let relatedVideosArr = [];
  const dataRelatedVideos = gfql_data.data.blogs[0]?.tags
  dataRelatedVideos.forEach(d => {
    relatedVideosArr.push(...d.blogs)
  });
  relatedVideosArr = _.uniqWith(relatedVideosArr, _.isEqual);
  const relatedVideos = relatedVideosArr.slice(0, 4);

  return {
    props: {
      blogDetails: blogDetails,
      relatedVideos: relatedVideos,
      blogCount: blogCount
    }
  }
};

export default BlogDetailsPage
