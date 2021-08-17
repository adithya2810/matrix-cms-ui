import React from "react";
import { Banner } from '@components/banner';
const PortfolioHero = (props) => {

  return (
    <Banner
      title="We take pride in our partners’ achievements."
      bannerImg="../../../../img/Portfolio.png"
      mobileBannerImg="../../img/portfolio-mobile-banner.png"
      mobile={props.deviceType.mobile}
    />

  );
};

export default PortfolioHero;

