import PageTitle from '@components/PageTitle';
import SocialMetaTags from '@components/SocialMetaTags';
import News from '@modules/News/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const NewsPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="News" url="/news" image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrix-websitebanner-media1.jpg`} />
      <News {...props} />
    </>
  );
};

export default NewsPage;
