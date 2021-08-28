import SocialMetaTags from '@components/SocialMetaTags';
import React, { FC } from 'react';
import Individual from "../../src/modules/advisoryTeam/individualMember";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  advisoryDetail: any;
};

const AdvisoryIndividual: FC<propsType> = (props: propsType) => {

  return (
    <>
      <SocialMetaTags title={props.advisoryDetail.name} image={props.advisoryDetail.image_url} description={props.advisoryDetail.description} />
      <Individual {...props} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const SINGLE_BLOG = `query ($slug: String!){
    people(where:{slug: $slug}){
      _id
      name
      description
      designation
      experience
      education
      contact
      twitter
      linkedin
      published_at
      createdAt
      updatedAt
      type
      email
      image_url
      currentinvest
      pastinvset
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
  }`;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people-by-slug/${params.slug}`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: SINGLE_BLOG, variables: { slug: slug } })
  });

  const data = await res.json()
  const advisoryDetail = data.data.people.length > 0 ? data.data.people[0] : [];
  return {
    props: { advisoryDetail }
  }
}

export default AdvisoryIndividual;
