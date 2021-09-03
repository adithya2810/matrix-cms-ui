import Blogs from '@modules/Blogs/index';
import React, { FC } from 'react';
import SocialMetaTags from '@components/SocialMetaTags';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogsPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="All Blogs" />
      <Blogs {...props} />
    </>
  );
};

export default BlogsPage;
