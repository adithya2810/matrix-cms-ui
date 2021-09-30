import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import Portfolio from '../../src/modules/portfolio';

export type Props = {
  portfolio: any[];
  deviceType: {
    mobile: boolean
  }
};

function PortfolioPage<Props>({ portfolio, deviceType }) {
  return (<>
    <SocialMetaTags title="Portfolio" url={`/portfolio`} description="We work with visionary founders of early-stage startups to amplify their intrinsic talent." image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrix-websitebanner-portfolio1.jpg`} />
    <Portfolio portfolio={portfolio} deviceType={deviceType} />
  </>);
}

export async function getServerSideProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies?_sort=name:ASC`);
  const data = await res.json()

  return {
    props: {
      portfolio: data,
    }
  }

}

export default PortfolioPage;
