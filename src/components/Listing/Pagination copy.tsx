import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getPagination = (currentPage, totalPages, appendSearch, pageType) => {
  let current = currentPage;
  let last = totalPages;
  let delta = 1;
  let left = current - delta;
  let right = current + delta + 2;
  let range = [];
  let rangeWithDots = [];
  let l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || i >= left && i < right) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  console.log(rangeWithDots);
  return rangeWithDots.reduce((acc, n) => {
    acc.push(<div key={n} onClick={_ => {
      if (+n != current) window.location.href = `${pageType ? '/' + pageType : ''}/news?page=${n}${appendSearch}`;
    }} className={`${+n ? 'cursor-pointer' : ''} body1 mx-2 px-4 sm:mx-1 sm:px-2 ${currentPage == +n ? 'text-white bg-accent-dark py-1' : +n ? 'bg-grey-dark text-accent-dark' : ''} py-1 hover:opacity-80`}>{(n < 10) ? `0${n}` : n}</div>)
    return acc
  }, []);
}

const Pagination: React.FC<{ total: number; pageType?: string; }> = ({ total, pageType }) => {
  // const totalPages = 2;
  const { query } = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = total;
  const [appendSearch, setAppendSearch] = useState('');

  const page = (v) => v;

  useEffect(() => {
    if (query.page) {
      setCurrentPage(page(query.page));
    } else {
      setCurrentPage(1)
    }
    if (query.tags || query.search) {
      query.tags && setAppendSearch(`&tags=${query.tags}`)
      query.search && setAppendSearch(`&search=${query.search}`)
    } else {
      setAppendSearch('')
    }
  }, [query]);

  const handlePrevPage = _ => {
    if (currentPage !== 1)
      window.location.href = `${pageType ? '/' + pageType : ''}/news?page=${Number(currentPage) - 1}${appendSearch}`;
  }
  const handleNextPage = _ => {
    if (currentPage != totalPages)
      window.location.href = `${pageType ? '/' + pageType : ''}/news?page=${Number(currentPage) + 1}${appendSearch}`;
  }

  return (
    <div className='flex justify-center sm:block mt-20 mb-16'>
      <div className='bg-grey flex justify-center items-center px-10 py-2'>
        <div onClick={handlePrevPage} className="cursor-pointer body2 text-accent-dark sm:hidden hover:opacity-80"> {`<`} Prev</div>
        <div onClick={handlePrevPage} className="cursor-pointer body2 text-accent-dark laptop:hidden hover:opacity-80"> {`<`}</div>
        <div className='flex px-20 sm:px-2'>
          {getPagination(currentPage, totalPages, appendSearch, pageType)}
        </div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark sm:hidden hover:opacity-80">Next {`>`}</div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark laptop:hidden hover:opacity-80">{`>`}</div>
      </div>
    </div>
  )
}

export default Pagination
