import PageTitle from '@components/PageTitle';
import Blogs from '@modules/Blogs/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogsPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Matrix Moments</PageTitle>
      <Blogs {...props} />
    </>
  );
};

export default BlogsPage;
