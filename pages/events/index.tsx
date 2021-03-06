import PageTitle from '@components/PageTitle';
import SocialMetaTags from '@components/SocialMetaTags';
import Events from '@modules/Events/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const EventssPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="Events" url="/events" image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrix-websitebanner-media1.jpg`} />
      <Events {...props} />
    </>
  );
};

export default EventssPage;
