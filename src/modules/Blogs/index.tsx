import React, { FC, useEffect, useState } from 'react';
import qs from 'qs';
import HeroSection from './HeroSection';
import AppliedFilters from './AppliedFilters';
import List from './List';
import Pagination from '../../components/Pagination';
import Filters from './Filters';
import { useRouter } from 'next/router';
import _ from "lodash"

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
  filter1: any[];
  filter2: any;
};

const index: FC<propsType> = (props) => {
  const [data, setData] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const router = useRouter()
  const { query } = router;
  const [page, setPage] = useState(+query.page || 1)
  const [appiedfilters, setAppliedFilters] = useState([])
  const [isPaginationOn, setIsPaginationOn] = useState(true)
  // const [filter1, setFilter1] = useState(null);
  // const [filter2, setFilter2] = useState(null);

  useEffect(() => {
    if (data == null) {
      fetchBlogsData(page)
    }
  }, [data])

  const getQueryStr = (str: any) => {
    return str;
  }


  const fetchBlogsData = async (page = 1) => {
    const filters: any = query.hasOwnProperty('filters') ? JSON.parse(getQueryStr(query.filters)) : {};
    try {
      const _limit = 20;
      const _start = (page * _limit) - _limit

      let query_str = '';
      if (Object.keys(filters).length > 0) {
        let applfltr = [];
        for (const key in filters) {
          if (Object.prototype.hasOwnProperty.call(filters, key)) {
            key != 'sort' && Array.prototype.push.apply(applfltr, filters[key]);
          }
        }
        setAppliedFilters(applfltr)
        // setAppliedFilters([...filters.topics, ...filters.authors, ...filters.formats, ...filters.moments])

        let makeQuery: any = { _where: [], _sort: {} };
        if (filters.hasOwnProperty('authors') && filters?.authors.length > 0) {
          makeQuery['_where']['author.slug'] = (filters?.authors.length > 0) ? filters?.authors : filters?.authors[0]
        }
        if (filters.hasOwnProperty('topics') && filters?.topics.length > 0) {
          makeQuery['_where']['tags.slug'] = (filters?.topics.length > 0) ? filters?.topics : filters?.topics[0]
        }
        if (filters.hasOwnProperty('formats') && filters?.formats.length > 0) {
          makeQuery['_where']['content_type.slug'] = (filters?.formats.length > 0) ? filters?.formats : filters?.formats[0]
        }
        if (filters.hasOwnProperty('moments') && filters?.moments.length > 0) {
          makeQuery['_where']['type.slug'] = (filters?.moments.length > 0) ? filters?.moments : filters?.moments[0]
        }

        query_str = qs.stringify(makeQuery);

      } else {
        setAppliedFilters([]);
      }

      if (Object.keys(filters).length == 0 && query) {
        let makeQuery: any = { _where: [] };
        for (const key in query) {
          if (Object.prototype.hasOwnProperty.call(query, key)) {
            if (key != "page") {
              if (key == "search") {
                makeQuery._where = {
                  _or: [
                    { 'name_contains': query[key] },
                    { 'tags.name_contains': query[key] },
                  ]
                };
                setAppliedFilters([query[key]]);
              } else {
                makeQuery[key] = query[key];
                setAppliedFilters([query[key]]);
              }
            }
          }
        }
        query_str = qs.stringify(makeQuery);
      }
      let sortby = '';
      if (Object.keys(filters).length > 0 && filters?.sort) {
        sortby = `&_sort=date:${filters?.sort}`;
      } else {
        sortby = `&_sort=date:DESC`;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?_start=${_start}&_limit=${_limit}${sortby}${(query_str) ? '&' + query_str : ''}`)
      const data = await res.json();
      setData(data)
      const countRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/count${(query_str) ? '?' + query_str : ''}`)
      const count = await countRes.json();
      const totalPages = Math.ceil(count / _limit); //count / _limit + (count % _limit === 0 ? 0 : 1)
      setTotalPages(totalPages)
      setIsPaginationOn(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="listing">
      <HeroSection mobile={props.deviceType.mobile} data={props.filter1} />
      <AppliedFilters mobile={props.deviceType.mobile} appliedFilters={appiedfilters} totalPages={totalPages > 9 ? totalPages : `0${totalPages}`} page={page ? page : 1} />
      <List {...props} data={data} />
      <Filters {...props} data={props.filter2} />
      <br />
      <br />
      {isPaginationOn && <Pagination totalPages={totalPages} mobile={props.deviceType.mobile} />}
      <br />
    </div>
  );
};

export default index;
