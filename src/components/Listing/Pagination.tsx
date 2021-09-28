import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const getPrevNextActive = (current, n) => {
  if (current != n) {
    if (current - 1 == n) {
      return "";
    } else if (current + 1 == n) {
      return "";
    } else {
      return 'sm:hidden';
    }
  }
};

const getPagination = (currentPage, totalPages, appendSearch, pageType, deviceType) => {
  let current = currentPage;
  let last = totalPages;
  let delta = 2;
  let left = current - delta;
  let right = current + delta + 2;
  let range = [];
  let rangeWithDots = [];
  let l;

  for (let i = 1; i <= last; i++) {
    // if (i == 1 || i == last || i >= left && i < right) {
    range.push(i);
    // }
  }

  let dotcount = 0;
  for (let i of range) {
    if (last <= 5) {
      rangeWithDots.push(i);
    } else {
      if (i == currentPage || i == (currentPage - 1) || i == (currentPage + 1)) {
        rangeWithDots.push(i);
      } else if (i == 1 || i == 2 || i == last || i == (last - 1)) {
        rangeWithDots.push(i);
      } else {
        if (currentPage > 2 && i < currentPage && dotcount == 0) {
          rangeWithDots.push('...');
          dotcount++;
        }
        if (currentPage < (last - 1) && i > currentPage && dotcount == 1) {
          rangeWithDots.push('...');
          dotcount++;
        }
      }
    }
    // if (l) {
    //   if (i - l === 2) {
    //     rangeWithDots.push(l + 1);
    //   } else if (i - l !== 1) {
    //     rangeWithDots.push('...');
    //   }
    // }
    // rangeWithDots.push(i);
    // l = i;
  }

  if (rangeWithDots.findIndex(v => v == '...') == -1) {
    let prevind = 0;
    let dotdsts = true;
    let j = 0;
    for (const k of rangeWithDots) {
      if (dotdsts && k !== (prevind + 1)) {
        rangeWithDots.splice(j, 0, '...');
        dotdsts = false;
      }
      prevind = k;
      j++;
    }
  }

  return rangeWithDots.reduce((acc, n) => {
    acc.push(<div key={n} onClick={_ => {
      if (+n != current) window.location.href = `${pageType ? '/' + pageType : ''}/news?page=${n}${appendSearch}`;
    }} className={`${+n ? 'cursor-pointer' : ''} body1 mx-2 px-2 sm:mx-1 sm:px-2 ${currentPage == +n ? 'text-white bg-accent-dark py-1' : +n ? 'bg-grey-dark text-accent-dark' : ''} py-1 hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 17, lineHeight: '20px' }}>{n}</div>)
    return acc
  }, []);
}

const Pagination: React.FC<{ total: number; pageType?: string; deviceType: { mobile: boolean; }; }> = ({ total, pageType, deviceType }) => {
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
          {getPagination(Number(currentPage), Number(totalPages), appendSearch, pageType, deviceType)}
        </div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark sm:hidden hover:opacity-80">Next {`>`}</div>
        <div onClick={handleNextPage} className="cursor-pointer body2 text-accent-dark laptop:hidden hover:opacity-80">{`>`}</div>
      </div>
    </div>
  )
}

export default Pagination
