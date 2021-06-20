import React, { FC } from 'react';
import Listing from '@components/Listing';

const data = {
  pageType: 'matrix_moments',
  title: (
    <h2>
      The Matrix <br /> Moments Series
    </h2>
  ),
};

type deviceType = {
  mobile: Boolean;
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
