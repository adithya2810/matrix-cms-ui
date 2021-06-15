import PageTitle from '@components/PageTitle'
import MatrixMoments from '@modules/MatrixMoments/index'
import React, { FC } from 'react'



const MatrixMomentsPage: FC = props => {
  return (
    <>
      <PageTitle>Matrix Moments</PageTitle>
      <MatrixMoments {...props} />
    </>
  )
}

export default MatrixMomentsPage
