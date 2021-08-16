import React from "react";
import { Banner } from '@components';

const MainBanner: React.FC<{ mobile: boolean; }> = ({ mobile }) => {
  return (
    <>
      <Banner
        bannerImg="../../../../img/advisory-banner.png"
        mobileBannerImg="../../img/advisory-mobile-banner.png"
        title="Job Opportunities"
        subTitle="Browse through the job lists"
        mobile={mobile}
      />
    </>
  );
};

export default MainBanner;

