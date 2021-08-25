import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import Portfolio from '../../src/modules/portfolio';

export type Props = {
  portfolio: any;
  deviceType: {
    mobile: boolean
  }
};

function PortfolioPage<Props>({ portfolio, deviceType }) {
  return (<>
    <SocialMetaTags title="Portfolio" description="We work with visionary founders of early-stage startups to amplify their intrinsic talent." image={`${process.env.NEXT_PUBLIC_APP_URL}/img/Portfolio.png`} />
    <Portfolio portfolio={portfolio} deviceType={deviceType} />
  </>);
}

export async function getServerSideProps() {

  const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/companies`);
  const data = await res.json()

  return {
    props: {
      portfolio: data,
    }
  }

}

export default PortfolioPage;
