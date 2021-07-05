import PageTitle from '@components/PageTitle';
import React, { FC } from 'react';
import Fintech from '../../src/modules/FinTechTeam'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const BlogsPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Fintech Team</PageTitle>
      <Fintech {...props} />
    </>
  );
};

export default BlogsPage;
