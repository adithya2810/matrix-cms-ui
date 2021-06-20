import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const getPagination = (currentPage, totalPages, push) => {
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
  return rangeWithDots.reduce((acc, n) => {
    if (n < 10) n = '0' + n;
    acc.push(<div onClick={_ => +n && push(`/matrix-moments?page=${n}`)} className={`${+n ? 'cursor-pointer' : ''} body1 mx-2 px-4 sm:mx-1 sm:px-2 ${currentPage === +n ? 'text-white bg-accent-dark py-1' : +n ? 'bg-grey-dark text-accent-dark' : ''} py-1 hover:opacity-80`}>{n}</div>)
    return acc
  }, []);
}

const Pagination = () => {
  const totalPages = 20;
  const { query: { page }, push } = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = _ => currentPage !== 1 && push(`/matrix-moments?page=${currentPage - 1}`)
  const handleNextPage = _ => currentPage !== totalPages && push(`/matrix-moments?page=${currentPage + 1}`)

  useEffect(() => {
    setCurrentPage(+page || 1)
  }, [page])
  return (
    <div className='flex justify-center sm:block mt-20 mb-16'>
      <div className='bg-grey flex justify-center items-center px-10 py-4'>
        <div onClick={handlePrevPage} className="cursor-pointer body2 text-accent-dark sm:hidden hover:opacity-80"> {`<`} Prev</div>
        <div onClick={handlePrevPage} className="cursor-pointer body2 text-accent-dark laptop:hidden hover:opacity-80"> {`<`}</div>
        <div className='flex px-20 sm:px-2'>
          {getPagination(currentPage, totalPages, push)}
        </div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark sm:hidden hover:opacity-80">Next {`>`}</div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark laptop:hidden hover:opacity-80">{`>`}</div>
      </div>
    </div>
  )
}

export default Pagination
