import React, { FC } from 'react'
import Listing from '@components/Listing'

const data = {
  pageType: 'matrix_moments',
  title: <h2>The Matrix <br /> Moments Series</h2>
}



const index: FC = (props) => {

  return (
    <div>
      <Listing {...props} {...data} />
    </div>
  )
}

export default index
