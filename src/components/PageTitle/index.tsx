import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

type propsType = {
  children: ReactNode
}

const PageTitle: FC<propsType> = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default PageTitle
