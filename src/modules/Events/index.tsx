import React, { FC } from 'react';
import Event_listing from '@components/Event_listing';

const data = {
  pageType: 'matrix_moments',
  title: (
    <h2 className='header'>
      Past Events
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
    <Event_listing {...props} {...data} />
  );
};

export default index;
