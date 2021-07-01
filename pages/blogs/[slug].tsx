import PageTitle from '@components/PageTitle';
import React, { FC } from 'react'
import BlogDetails from '@modules/BlogDetails'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogDetailsPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Blog</PageTitle>
      <BlogDetails {...props} />
    </>
  )
}

export default BlogDetailsPage
