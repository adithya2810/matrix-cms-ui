import { CloseCross } from '@components/Icons';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import _ from "lodash";

const getFilters = (filters, removeFilter, query) => {
  return filters.map((f, i) => (
    <div key={i} className="border-2 border-accent flex items-center sub-h2 laptop:py-2 laptop:px-4 sm:py-1 sm:px-2 flex-shrink-0">
      <span className="">{f}</span>
      <span className="cursor-pointer pl-3" onClick={() => removeFilter(f)}>
        <CloseCross />
      </span>
    </div>
  ));
};

const AppliedFilters = ({ mobile, appliedFilters, totalPages, page }) => {
  const { query } = useRouter();
  useEffect(() => {
    console.log(appliedFilters);
  }, [appliedFilters])
  const getQueryStr = (str: any) => {
    return str;
  }
  const removeFilter = (v) => {
    if (v == 'all') window.location.href = '/blogs';
    else {
      const filters: any = query.hasOwnProperty('filters') ? JSON.parse(getQueryStr(query.filters)) : {};
      let rmflt = filters;
      if (Object.keys(filters).length > 0) {
        for (const key in filters) {
          if (Object.prototype.hasOwnProperty.call(filters, key)) {
            let fldata = filters[key];
            if (_.indexOf(fldata, v) != -1) {
              fldata.splice(_.indexOf(fldata, v), 1);
              rmflt[key] = fldata;
            } else {
              rmflt[key] = fldata.length > 0 ? ((key == 'sort') ? 'desc' : []) : fldata;
            }
          }
        }
      }

      if (Object.keys(rmflt).length > 0) {
        let sts = false;
        for (const key in rmflt) {
          if (Object.prototype.hasOwnProperty.call(rmflt, key)) {
            const arr = rmflt[key];
            if (key != 'sort' && arr.length != 0) {
              sts = true;
            }
          }
        }
        if (!sts) rmflt = {};
      }

      if (query.hasOwnProperty('page')) {
        query.page = "1";
      }
      if (query.hasOwnProperty('filters')) {
        if (Object.keys(rmflt).length > 0) query.filters = JSON.stringify(rmflt);
        else delete query.filters;
      }
      if (query.hasOwnProperty('search')) {
        delete query.search;
      }
      if (query.hasOwnProperty('tags.slug')) {
        delete query['tags.slug'];
      }
      let search_str = Object.keys(query).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(getQueryStr(query[k]))
      }).join('&')
      window.location.href = `/blogs${search_str ? '?' + search_str : ''}`;
    }
  }
  return (
    <div className="section">
      <div className="laptop:flex laptop:items-center mt-10 mb-6 mr-14 sm:my-4">
        <div className="sub-h2 text-accent-dark laptop:mr-32 sm:mb-5 flex-shrink-0" style={mobile ? { lineHeight: '18px' } : {}}>
          Page <span className="text-accent-light"> {page > 9 ? page : `0${page}`} </span>/ {totalPages}
        </div>
        {!!appliedFilters.length &&
          <>
            <div className="applied-filters justify-self-center flex gap-4 laptop:mr-14 sm:overflow-x-scroll laptop:flex-wrap sm:flex-shrink-0">
              {getFilters(appliedFilters, removeFilter, query)}
            </div>
            <div onClick={() => removeFilter('all')} className="cursor-pointer sub-h2 text-accent underline mr-8 w-32 sm:hidden">Clear All</div>
          </>
        }
      </div>
      <div className="bg-accent-dark w-full h-0.5 laptop:mb-10 sm:mb-2 opacity-20" />
      <br className='laptop:hidden' />
    </div>
  );
};

export default AppliedFilters;
