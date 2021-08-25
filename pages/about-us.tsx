import SocialMetaTags from '@components/SocialMetaTags';
import AboutUs from '@modules/AboutUs';
import React, { FC } from 'react';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const AboutUsPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="About Us" description="Matrix Partners began in Boston in 1977, and today invests actively in the USA, India and China. Matrix Partners India was established in 2006, and invests..." />
      <AboutUs {...props} />
    </>
  );
};

export default AboutUsPage;
