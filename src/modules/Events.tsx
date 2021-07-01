import React, { FC } from 'react'
import EventsAndNews from '@components/EventsAndNews'



type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const Events: FC<propsType> = (props) => {
  return (
    <>
      <EventsAndNews type='events' {...props} />
    </>
  )
}

export default Events
