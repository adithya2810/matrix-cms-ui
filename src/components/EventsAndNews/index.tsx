import React, { FC, ReactNode, useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import SearchMoreLaptop from '@components/SearchMoreLaptop';
import SearchMoreMobile from '@components/SearchMoreMobile';
import List from './List';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
import AppliedFilters from './AppliedFilters';


type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  type: String;
};

const index: FC<propsType> = (props) => {
  const [data, setData] = useState(null)
  const { query: { page } } = useRouter()

  useEffect(() => { fetchData(+page || 1) }, [page])

  const fetchData = async (page = 1) => {
    try {
      const _limit = 2
      const _start = (page * _limit) - (_limit - 1)
      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/${props.type}?_start=${_start}&_limit=${_limit}`)
      const data = await res.json();
      setData(data)
      console.log({ data })
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className="listing">
      <HeroSection {...props} />
      <AppliedFilters {...props} />
      {/* <List {...props} data={data} /> */}
      <Pagination />
      {!props.deviceType.mobile ?
        <SearchMoreLaptop {...props} />
        :
        <SearchMoreMobile {...props} />}
    </div>
  );
};

export default index;
