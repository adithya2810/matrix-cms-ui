import React from "react";
import Home from "../../src/modules/home";
import SocialMetaTags from '@components/SocialMetaTags';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HomePage: React.FC<propsType> = (props) => {
  return (
    <><SocialMetaTags />
      <Home deviceType={props.deviceType} />
    </>);
}

export default HomePage;
