import PageTitle from '@components/PageTitle';
import SocialMetaTags from '@components/SocialMetaTags';
import News from '@modules/News/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const NewsPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="News" image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrixMomentsLaptop.png`} />
      <News {...props} />
    </>
  );
};

export default NewsPage;
