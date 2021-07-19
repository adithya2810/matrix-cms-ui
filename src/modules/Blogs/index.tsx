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
  const [totalPages, setTotalPages] = useState(0)
  const { query: { page } } = useRouter()
  const [appiedfilters, setAppliedFilters] = useState([])
  const [isPaginationOn, setIsPaginationOn] = useState(true)

  useEffect(() => { fetchBlogsData(+page || 1) }, [page])

  const fetchBlogsData = async (page = 1) => {
    try {
      const _limit = 20;
      const _start = (page * _limit) - (_limit - 1)
      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?_start=${_start}&_limit=${_limit}`)
      const data = await res.json();
      setData(data)
      const countRes = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count`)
      const count = await countRes.json();
      const totalPages = count / _limit + (count % _limit === 0 ? 0 : 1)
      setTotalPages(totalPages)
      setIsPaginationOn(true)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchBlogsDataWithFilters = async (filters) => {
    const topicsTags = filters.topics.map(t => `slug=${encodeURIComponent(t)}`)?.join('&')
    const peopleSlugs = filters.authors.map(t => `slug=${encodeURIComponent(t)}`)?.join('&')
    try {
      const topicsRes = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?${topicsTags}`)
      const topicsData = await topicsRes.json();
      const authorsRes = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people?${peopleSlugs}`)
      const authorsData = await authorsRes.json();
      setData([...topicsData, ...authorsData])
      setAppliedFilters([...filters.topics, ...filters.authors])
      setIsPaginationOn(false)
    } catch (e) {

    }
  }

  return (
    <div className="listing">
      <HeroSection mobile={props.deviceType.mobile} />
      <AppliedFilters appliedFilters={appiedfilters} />
      <List {...props} data={data} />
      <Filters {...props} fetchBlogsDataWithFilters={fetchBlogsDataWithFilters} fetchBlogsData={fetchBlogsData} />
      <br />
      <br />
      <br />
      <br />
      {isPaginationOn && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default index;
