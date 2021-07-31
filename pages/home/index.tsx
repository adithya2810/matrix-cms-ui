import React from "react";
import Home from "../../src/modules/home";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HomePage: React.FC<propsType> = (props) => {
  return <Home deviceType={props.deviceType} />;
}

export default HomePage;
