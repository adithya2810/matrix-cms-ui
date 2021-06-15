import PageTitle from '@components/PageTitle';
import MatrixMoments from '@modules/MatrixMoments/index';
import React, { FC } from 'react';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const MatrixMomentsPage: FC<propsType> = (props) => {
  return (
    <>
      <PageTitle>Matrix Moments</PageTitle>
      <MatrixMoments {...props} />
    </>
  );
};

export default MatrixMomentsPage;
