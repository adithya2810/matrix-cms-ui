import React, { FC } from 'react';
import Individual from "../../src/modules/advisoryTeam/individualMember";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  advisoryDetail: any;
};

const AdvisoryIndividual: FC<propsType> = (props: propsType) => {

  return (
    <>
      <Individual {...props} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context

  const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people?slug=${params.slug}`);
  const data = await res.json()

  return {
    props: { advisoryDetail: data }
  }
}

export default AdvisoryIndividual;
