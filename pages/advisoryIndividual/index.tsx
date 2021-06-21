import React, { FC } from 'react';
import Individual from "../../src/modules/advisoryTeam/individualMember";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const AdvisoryIndividual: FC<propsType> = (props) => {
  return (
    <>
      <Individual {...props} />
    </>
  );
};

export default AdvisoryIndividual;
