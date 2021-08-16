import React, { FC } from 'react';
import Role from "../../src/modules/careers/roleDescription/roleDescription";


const RoleDescription: FC<{ deviceType: { mobile: boolean; } }> = (props) => {
  return (
    <>
      <Role  {...props} deviceType={props.deviceType} />
    </>
  );
};

export default RoleDescription;
