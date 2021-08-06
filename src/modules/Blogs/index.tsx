import React, { FC, ReactNode, useEffect, useState } from 'react';
import qs from 'qs';
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
  const router = useRouter()
  const { query: { page } } = router
  const [appiedfilters, setAppliedFilters] = useState([])
  const [isPaginationOn, setIsPaginationOn] = useState(true)

  useEffect(() => { fetchBlogsData(+page || 1) }, [page])

  const fetchBlogsData = async (page = 1, filters: any = {}) => {
    try {
      const _limit = 20;
      const _start = (page * _limit) - _limit

      let query_str = '';
      if (Object.keys(filters).length > 0) {
        let makeQuery: any = { _where: [], _sort: {} };
        if (filters?.authors.length > 0) {
          makeQuery['_where']['author.slug'] = (filters?.authors.length > 0) ? filters?.authors : filters?.authors[0]
        }
        if (filters?.topics.length > 0) {
          makeQuery['_where']['tags.slug'] = (filters?.topics.length > 0) ? filters?.topics : filters?.topics[0]
        }
        if (filters?.formats.length > 0) {
          makeQuery['_where']['content_type.slug'] = (filters?.formats.length > 0) ? filters?.formats : filters?.formats[0]
        }

        router.query = {};

        query_str = qs.stringify(makeQuery);
        if (filters?.sort) {
          query_str += `&_sort=tags.name:${filters?.sort}`
        }
      } else {

      }

      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?_start=${_start}&_limit=${_limit}${(query_str) ? '&' + query_str : ''}`)
      const data = await res.json();
      setData(data)
      const countRes = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count${(query_str) ? '?' + query_str : ''}`)
      const count = await countRes.json();
      const totalPages = Math.ceil(count / _limit); //count / _limit + (count % _limit === 0 ? 0 : 1)
      setTotalPages(totalPages)
      if (Object.keys(filters).length > 0) {
        setAppliedFilters([...filters.topics, ...filters.authors, ...filters.formats, ...filters.moments])
        setIsPaginationOn(false)
      } else {
        setAppliedFilters([]);
        setIsPaginationOn(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="listing">
      <HeroSection mobile={props.deviceType.mobile} />
      <AppliedFilters mobile={props.deviceType.mobile} appliedFilters={appiedfilters} totalPages={totalPages > 9 ? totalPages : `0${totalPages}`} page={page ? page : 1} />
      <List {...props} data={data} />
      <Filters {...props} fetchBlogsData={fetchBlogsData} />
      <br />
      <br />
      <br />
      <br />
      {isPaginationOn && <Pagination totalPages={totalPages} mobile={props.deviceType.mobile} />}
    </div>
  );
};

export default index;
