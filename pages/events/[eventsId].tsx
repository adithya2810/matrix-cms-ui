import SocialMetaTags from '@components/SocialMetaTags';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Details from "../../src/modules/Events/details";

function DetailsPage(props) {
  const { query } = useRouter();
  return (<>
    <SocialMetaTags title={props.eventsdata.name} url={`/events/${query.eventsId}`} description={props.eventsdata.description} image={props.eventsdata.cover_image_url} />
    <Details {...props} />
  </>);
};

export async function getServerSideProps(ctx) {
  const { eventsId } = ctx.params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?slug=${eventsId}`);
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
