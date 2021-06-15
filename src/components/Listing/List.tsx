import React, { FC } from 'react'
import Card from './Card'

const data = [{}, {}, {}, {}, {}, {}, {}, {},]

const List: FC = (props) => {
  return (
    <div className='section grid grid-cols-1 laptop:grid-cols-2 gap-12 sm:gap-4'>
      {data.map((d, i) => <Card key={i} {...props} />)}
    </div>
  )
}

export default List
