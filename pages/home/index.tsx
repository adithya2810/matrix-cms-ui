import React from "react";
import Home from "../../src/modules/home";

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
};

const HomePage: React.FC<propsType> = (props) => {
  return <Home deviceType={props.deviceType} />;
}

export default HomePage;
