import PageTitle from '@components/PageTitle';
import Blogs from '@modules/Blogs/index';
import React, { FC } from 'react';
import Head from "next/head";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogsPage: FC<propsType> = (props) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
      </Head>
      <PageTitle>Matrix Moments</PageTitle>
      <Blogs {...props} />
    </>
  );
};

export default BlogsPage;
