import { CloseCross } from '@components/Icons';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useEffect } from 'react';

const getFilters = (filters, removeFilter, query) => {
  return filters.map((f, i) => (
    <div key={i} className="border-2 border-accent flex items-center sub-h2 laptop:py-2 laptop:px-4 sm:py-1 sm:px-2 flex-shrink-0">
      <span className="">{f}</span>
      <span className="cursor-pointer pl-3" onClick={() => Object.keys(query).length > 0 ? window.location.href = '/blogs' : removeFilter(f)}>
        <CloseCross />
      </span>
    </div>
  ));
};

const AppliedFilters = ({ mobile, appliedFilters, totalPages, page, removeFilter }) => {
  const { push, query } = useRouter();
  useEffect(() => {
    console.log(appliedFilters);
  }, [appliedFilters])
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
            <div onClick={() => Object.keys(query).length > 0 ? window.location.href = '/blogs' : removeFilter('all')} className="cursor-pointer sub-h2 text-accent underline mr-8 w-32 sm:hidden">Clear All</div>
          </>
        }
      </div>
      <div className="bg-accent-dark w-full h-0.5 laptop:mb-10 sm:mb-2 opacity-20" />
      <br className='laptop:hidden' />
    </div>
  );
};

export default AppliedFilters;
