import React, { FC, ReactNode, useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import AppliedFilters from './AppliedFilters';
import List from './List';
import Pagination from '../../components/Pagination';
import Filters from './Filters';
import { useRouter } from 'next/router';


type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {
  const [data, setData] = useState(null)
  const { query: { page } } = useRouter()
  const [appiedfilters, setAppliedFilters] = useState([])

  useEffect(() => { fetchBlogsData(+page || 1) }, [page])

  const fetchBlogsData = async (page = 1) => {
    try {
      const _limit = 20;
      const _start = (page * _limit) - (_limit - 1)
      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?_start=${_start}&_limit=${_limit}`)
      const data = await res.json();
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchBlogsDataWithFilters = async (filters) => {
    const tags = filters.topics.map(t => `slug=${t}`)?.join('&')
    try {
      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?${tags}`)
      const data = await res.json();
      setAppliedFilters(filters.topics)
      setData(data)
    } catch (e) {

    }
  }

  return (
    <div className="listing">
      <HeroSection {...props} />
      <AppliedFilters appliedFilters={appiedfilters} />
      <List {...props} data={data} />
      <Filters {...props} fetchBlogsDataWithFilters={fetchBlogsDataWithFilters} fetchBlogsData={fetchBlogsData} />
      <br />
      <br />
      <br />
      <br />
      <Pagination />
    </div>
  );
};

export default index;
