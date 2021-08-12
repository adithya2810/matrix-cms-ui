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
  const { query } = router;
  const [page, setPage] = useState(1)
  const [appiedfilters, setAppliedFilters] = useState([])
  const [isPaginationOn, setIsPaginationOn] = useState(true)
  const [filter, setFilter] = useState({})

  useEffect(() => {
    if (data == null) {
      fetchBlogsData(page)
    }
    // return () => {
    //   setData(null)
    //   setPage(1)
    //   setAppliedFilters([])
    //   setFilter({})
    //   setIsPaginationOn(true)
    // }
  }, [])

  const pageClick = (p) => {
    setPage(p)
    fetchBlogsData(p, filter);
  }

  const fetchBlogsData = async (page = 1, filters: any = {}) => {
    setFilter(filters);
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

        query_str = qs.stringify(makeQuery);
        if (filters?.sort) {
          query_str += `&_sort=tags.name:${filters?.sort}`
        }
      } else {
        setPage(page)
      }

      if (Object.keys(filters).length == 0 && query) {
        let makeQuery: any = [];
        for (const key in query) {
          if (Object.prototype.hasOwnProperty.call(query, key)) {
            makeQuery.push(`${key}=${query[key]}`);
          }
        }
        query_str = makeQuery.join("&");
      }

      const res = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?_start=${_start}&_limit=${_limit}${(query_str) ? '&' + query_str : ''}`)
      const data = await res.json();
      setData(data)
      const countRes = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs/count${(query_str) ? '?' + query_str : ''}`)
      const count = await countRes.json();
      const totalPages = Math.ceil(count / _limit); //count / _limit + (count % _limit === 0 ? 0 : 1)
      setTotalPages(totalPages)
      setIsPaginationOn(true)
      if (Object.keys(filters).length > 0) {
        setAppliedFilters([...filters.topics, ...filters.authors, ...filters.formats, ...filters.moments])
      } else {
        setAppliedFilters([]);
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
      <Filters {...props} page={page} fetchBlogsData={fetchBlogsData} />
      <br />
      <br />
      <br />
      <br />
      {isPaginationOn && <Pagination page={page} pageChnage={(v) => pageClick(v)} totalPages={totalPages} mobile={props.deviceType.mobile} />}
    </div>
  );
};

export default index;
