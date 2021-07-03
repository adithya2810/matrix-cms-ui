import React, { FC, ReactNode } from 'react';
import HeroSection from './HeroSection';
import AppliedFilters from './AppliedFilters';
import List from './List';
import Pagination from './Pagination';
import Filters from './Filters';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  title: ReactNode;
  pageType: String;
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {
  return (
    <div className="listing">
      <HeroSection {...props} />
      <AppliedFilters />
      <List {...props} />
      <Filters {...props} />
      <Pagination />
    </div>
  );
};

export default index;
