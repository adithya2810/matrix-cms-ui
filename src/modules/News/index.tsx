import React, { FC } from 'react';
import Listing from '@components/Listing';

const data = {
  pageType: '',
  title: (
    <h2 className='header'>
      Matrix in the News
    </h2>
  ),
};

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {
  return (
    <Listing {...props} {...data} />
  );
};

export default index;
