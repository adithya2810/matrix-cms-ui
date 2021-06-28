import PageTitle from '@components/PageTitle';
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
      <PageTitle>Matrix Moments</PageTitle>
      <News {...props} />
    </>
  );
};

export default NewsPage;
