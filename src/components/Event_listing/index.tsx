import React, { FC, ReactNode, useState } from 'react';
import HeroSection from './HeroSection';
import AppliedFilters from './AppliedFilters';
import List from './List';
import Pagination from './Pagination';
import Filters from './Filters';
import { useRouter } from 'next/router'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  title: ReactNode;
  pageType: String;
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {

  const getEvents = (currentpage) => {
    window.location.replace(currentpage);
  }

  return (
    <div className="listing">
      <HeroSection {...props} />
      <AppliedFilters />
      <List {...props} />
      <Filters {...props} />
      <Pagination myfunction={getEvents} />
    </div>
  );
};

export default index;
