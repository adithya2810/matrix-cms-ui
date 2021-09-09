import React, { FC } from 'react';
import Event_listing from '@components/Event_listing';

const data = {
  pageType: '',
  title: (
    <h2 className='header'>
      Past Events
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
    <Event_listing {...props} {...data} />
  );
};

export default index;
