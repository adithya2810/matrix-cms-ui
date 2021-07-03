import PageTitle from '@components/PageTitle';
import Events from '@modules/Events/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const EventssPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Matrix Moments</PageTitle>
      <Events {...props} />
    </>
  );
};

export default EventssPage;
