import SocialMetaTags from '@components/SocialMetaTags';
import React, { FC } from 'react';
import Details from "../../src/modules/Events/details";

function DetailsPage(props) {
  return (<>
    <SocialMetaTags title={props.eventsdata.name} description={props.eventsdata.description} image={props.eventsdata.cover_image_url} />
    <Details {...props} />
  </>);
};

export async function getServerSideProps(ctx) {
  const { eventsId } = ctx.params;

  const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/events?slug=${eventsId}`);
  const data = await res.json()
  if (!data || data.length == 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      eventsdata: data[0],
    }
  }
}

export default DetailsPage;
