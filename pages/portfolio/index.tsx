import React from "react";
import Portfolio from '../../src/modules/portfolio';

export type Props = {
  portfolio: any;
  deviceType: {
    mobile: boolean
  }
};

function PortfolioPage<Props>({ portfolio, deviceType }) {
  return <Portfolio portfolio={portfolio} deviceType={deviceType} />;
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
