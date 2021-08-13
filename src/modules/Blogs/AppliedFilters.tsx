import { CloseCross } from '@components/Icons';
import React, { FC, ReactNode, useEffect } from 'react';

const getFilters = (filters, removeFilter) => {
  return filters.map((f, i) => (
    <div key={i} className="border-2 border-accent flex items-center sub-h2 laptop:py-2 laptop:px-4 sm:py-1 sm:px-2 flex-shrink-0">
      <span className="">{f}</span>
      <span className="cursor-pointer pl-3" onClick={() => removeFilter(f)}>
        <CloseCross />
      </span>
    </div>
  ));
};

const AppliedFilters = ({ mobile, appliedFilters, totalPages, page, removeFilter }) => {

  useEffect(() => {
    console.log(appliedFilters);
  }, [appliedFilters])
  return (
    <div className="section">
      <div className="laptop:flex laptop:items-center mt-10 mb-6 sm:my-4">
        <div className="sub-h2 text-accent-dark laptop:mr-32 sm:mb-5 flex-shrink-0" style={mobile ? { lineHeight: '18px' } : {}}>
          Page <span className="text-accent-light"> {page > 9 ? page : `0${page}`} </span>/ {totalPages}
        </div>
        {!!appliedFilters.length &&
          <>
            <div className="applied-filters justify-self-center flex gap-4 laptop:mr-8 sm:overflow-x-scroll laptop:flex-wrap sm:flex-shrink-0">
              {getFilters(appliedFilters, removeFilter)}
            </div>
            <div onClick={() => removeFilter('all')} className="cursor-pointer sub-h2 text-accent underline sm:hidden">Clear All</div>
          </>
        }
      </div>
      <div className="bg-accent-dark w-full h-0.5 laptop:mb-10 sm:mb-2 opacity-20" />
      <br className='laptop:hidden' />
    </div>
  );
};

export default AppliedFilters;
