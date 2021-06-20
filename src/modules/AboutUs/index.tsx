import React, { FC } from 'react';
import AboutMatrix from './AboutMatrix';
import HeroSection from './HeroSection';
import Partnering from './Partnering';
import Stats from './Stats';
import SubmitPlan from './SubmitPlan';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {
  return (
    <div>
      <HeroSection deviceType={props.deviceType} />
      <div className='grid grid-cols-2 sm:grid-cols-1'>
        <AboutMatrix />
        <Stats {...props} />
        <Partnering />
        <SubmitPlan {...props} />
      </div>
    </div>
  );
};

export default index;
