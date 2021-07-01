import PageTitle from '@components/PageTitle';
import Events from '@modules/Events';
import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const EventsPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Events</PageTitle>
      <Events {...props} />
    </>
  );
};

export default EventsPage;
