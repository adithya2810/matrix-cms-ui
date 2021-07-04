import React from "react";
import Portfolio from '../../src/modules/portfolio';

function PortfolioPage({ portfolio }) {
  return <Portfolio portfolio={portfolio} />;
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
