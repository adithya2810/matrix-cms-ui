import React from "react";
import { Banner } from '@components';

const MainBanner: React.FC = () => {
  return (
    <>
      <Banner
        bannerImg="../../../../img/advisory-banner.png"
        mobileBannerImg="../../img/advisory-mobile-banner.png"
        title="Job Opportunities"
        subTitle="Browse through the job lists"
      />
    </>
  );
};

export default MainBanner;

