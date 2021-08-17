import PageTitle from '@components/PageTitle';
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
      <PageTitle>About Us</PageTitle>
      <AboutUs {...props} />
    </>
  );
};

export default AboutUsPage;
