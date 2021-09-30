import SocialMetaTags from '@components/SocialMetaTags';
import router, { useRouter } from 'next/router';
import React, { FC } from 'react';
import Details from "../../src/modules/News/details";

function DetailsPage(props) {
  const { query } = useRouter();
  return (<>
    <SocialMetaTags title={props.newsdata.title} url={`/news/${query.newsId}`} description={props.newsdata.body} image={props.newsdata.imageurl} />
    <Details {...props} />
  </>);
};

export async function getServerSideProps(ctx) {
  const { newsId } = ctx.params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/infos?slug=${newsId}`);
  const data = await res.json()
  if (!data || data.length == 0) {
    return {
      notFound: true
    }
  }
  let tags = [];
  let sectoral = data[0].tags.filter(v => v.sectorial == true);
  let non_sectoral = data[0].tags.filter(v => v.sectorial == false);
  if (sectoral.length != 0 || non_sectoral.length != 0) {
    tags = [{ name: 'SECTORIAL', data: sectoral }, { name: 'NON-SECTORIAL', data: non_sectoral }];
  }

  return {
    props: {
      newsdata: data[0],
      tags: tags
    }
  }
};

export default DetailsPage;
