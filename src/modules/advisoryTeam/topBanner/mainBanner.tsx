import React from "react";
import { Banner } from '@components';

export type Props = {
  banner?: string;
};

const MainBanner: React.FC<Props> = ({ banner }) => {
  return (
    <>
      <Banner
        bannerImg={banner}
        mobileBannerImg="../../img/advisory-mobile-banner.png"
        title="We are company builders first."
        subTitle="Our experience supports and amplifies companies over their lifespan"
      />
    </>
  );
};

export default MainBanner;

