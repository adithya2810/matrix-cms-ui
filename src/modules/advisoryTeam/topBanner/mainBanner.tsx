import React from "react";
import { Banner } from '@components';

const MainBanner: React.FC = () => {
  return (
    <>
      <Banner
        bannerImg="../../../../img/advisory-banner.png"
        mobileBannerImg="../../img/advisory-mobile-banner.png"
        title="We are company builders first."
        subTitle="Our experience supports and amplifies companies over their lifespan"
      />
    </>
  );
};

export default MainBanner;

