import { CloseCross } from '@components/Icons';
import { useRouter } from "next/router";
import React, { FC } from 'react'

const getFilters = (query, pageType) => {
  let filters = [];
  if (query.search) filters.push(query.search);
  return filters.map((f) => (
    <div className="border-2 border-accent flex items-center sub-h2 laptop:py-2 laptop:px-4 sm:py-1 sm:px-2">
      <span className="mr-3">{f}</span>
      <span className="cursor-pointer" onClick={() => window.location.href = `${pageType ? '/' + pageType : ''}/events`}>
        <CloseCross />
      </span>
    </div>
  ));
};

const AppliedFilters: FC<{ total: number; pageType: string; }> = ({ total, pageType }) => {
  const { query } = useRouter();
  const page = (v: any) => {
    if (v) {
      return v > 9 ? v : `0${v}`;
    } else {
      return '01';
    }
  };

  return (
    <div className="section">
      <div className="laptop:flex laptop:items-center mt-10 mb-6 sm:mt-5 sm:mb-3">
        <div className="sub-h2 text-accent-dark laptop:mr-32 sm:mb-5">
          Page <span className="text-accent-light"> {page(query.page)} </span>/ {total < 10 ? `0${total}` : total}
        </div>
        {(query.search) && <>
          <div className="justify-self-center flex gap-4 laptop:mr-8 sm:overflow-x-scroll">
            {getFilters(query, pageType)}
          </div>
          <div className="sub-h2 text-accent underline sm:hidden cursor-pointer" onClick={() => window.location.href = `${pageType ? '/' + pageType : ''}/events`}>Clear All</div>
        </>}
      </div>
      <div className="bg-accent-dark w-full h-0.5 laptop:mb-20 sm:mb-10 opacity-20" />
    </div>
  );
};

export default AppliedFilters;
