import { ClostBtn, SelectAllLaptop, SelectNoneLaptop } from '@components/Icons';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef, useState } from 'react';

const HeroSection: FC<{ mobile: boolean; data?: any[] }> = ({ mobile, data }) => {
  const { query } = useRouter();
  const [openFilter, setOpenFilter] = useState(false);
  // const [data, setData] = useState(null)
  const [filters, setFilters] = useState({ moments: [], formats: [], sort: 'desc' })
  const [openedFilter, setOpenedFilter] = useState('')
  const filterRef = useRef(null);

  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setOpenFilter(false);
  };

  useEffect(() => {
    if (openFilter) document.addEventListener('click', handleClickEvent);
    return () => document.removeEventListener('click', handleClickEvent);
  }, [openFilter]);

  const getQueryStr = (str: any) => {
    return str;
  }

  useEffect(() => {
    if (query.hasOwnProperty('filters'))
      setFilters(JSON.parse(getQueryStr(query.filters)))
  }, [query.filters])

  const capitalize = (str) => {
    if (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        if ((/[a-zA-Z]/).test(words[i].charAt(0))) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      if (words.join(" ") == 'Amm') return 'AMM';
      else return words.join(" ");
    }
    return '';
  };

  const clickSearch = () => {
    setOpenFilter(false);
    if (Object.keys(filters).length > 0) {
      window.location.href = `/matrixmoments?filters=${JSON.stringify(filters)}`;
    }
  }

  return (
    <>
      <div className={`listing-hero-section`} style={{ height: mobile ? '69vh' : '51vh', backgroundImage: 'url(/img/MatrixMoments-Series-01.jpg)' }}>
        <div className="title section laptop:ml-40 laptop:mt-20 laptop:mb-12">
          <h2 style={!mobile ? { lineHeight: '6.5rem', fontWeight: 400, fontSize: '6rem', letterSpacing: -2.5 } : {}}>
            {/* The Matrix <br /> Moments Series */}
          </h2>
        </div>
        {/* <div className="info Manrope-normal cursor-pointer" style={mobile ? { width: 235, fontWeight: 500, fontSize: 14, lineHeight: 18, letterSpacing: 1 } : { width: 320 }}>
          <p className="body1">
            Use the filter panel to find your specific topic of interest
          </p>
        </div> */}
      </div>
      {openFilter && <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />}
      <div ref={filterRef} className="top-filter duration-300 overflow-y-hidden" style={{ display: openFilter ? 'block' : 'none' }}>
        <div className="laptop:hidden flex justify-end" onClick={() => setOpenFilter(!openFilter)} ><ClostBtn /></div>
        <ul className="text-white px-5 filter-lists">
          {data && data.map((f, k) => {
            return (<div key={k} style={{ display: 'contents' }}>
              <li className="py-2 sm:py-2  flex items-center ">
                <div style={mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != f.id) ? '#ffffff8f' : '#ffffff' }} onClick={() => openedFilter === f.id ? setOpenedFilter('') : setOpenedFilter(f.id)} className="flex items-center cursor-pointer hover:text-accent-light">
                  <span className='mr-5 sm:mr-2' style={{ display: 'block', zIndex: 1 }}>{openedFilter === f.id ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>{f.name}
                </div>
                {openedFilter === f.id &&
                  <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline' style={mobile ? {} : { fontSize: 16 }}>
                    <span className="">All</span>
                    <div onClick={e => {
                      e.stopPropagation();
                      setFilters({ ...filters, [f.id]: filters[f.id].length === f.data.length ? [] : f.data.map(m => m.slug) })
                    }} className='sm:mt:1 laptop:mt-2 cursor-pointer'>{filters[f.id].length === f.data.length ? <SelectAllLaptop /> : <SelectNoneLaptop />}</div>
                  </span>
                }
              </li>
              {openedFilter === f.id && <div className='flex flex-wrap filters-contents'>
                {f.data.map((t, i) => {
                  const isSelected = filters[f.id].includes(t.slug);
                  return t.tagNumber > 0 && <div key={i} onClick={() => setFilters({ ...filters, [f.id]: filters[f.id].includes(t.slug) ? filters[f.id].filter(m => m !== t.slug) : [...filters[f.id], t.slug] })} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={mobile ? {} : { fontSize: 16, fontWeight: 300 }}>
                    {capitalize(t.tagName)} <span className="laptop:font-normal" style={mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!t.tagNumber && `(${t.tagNumber})`}</span>
                  </div>
                })}
              </div>}
            </div>)
          })}
          <li className="py-4 sm:py-2  flex items-center">
            <div style={mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'sort') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'sort' ? setOpenedFilter('') : setOpenedFilter('sort')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5 sm:mr-2'>{openedFilter === 'sort' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Sort By</div>
          </li>
          {openedFilter === 'sort' && <div className='flex flex-wrap filters-contents'>
            <div onClick={() => setFilters({ ...filters, sort: 'asc' })} className={`${filters.sort === 'asc' ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={mobile ? {} : { fontSize: 16, fontWeight: 300 }}>
              Ascending <span className="laptop:font-normal" style={mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}></span>
            </div>
            <div onClick={() => setFilters({ ...filters, sort: 'desc' })} className={`${filters.sort === 'desc' ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={mobile ? {} : { fontSize: 16, fontWeight: 300 }}>
              Descending <span className="laptop:font-normal" style={mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}></span>
            </div>
          </div>}
        </ul>
        <div className="bg-accent-dark px-14 py-5 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full flex justify-between">
          <div onClick={() => window.location.href = "/matrixmoments"} className="sub-h2 text-accent-light underline cursor-pointer hover:opacity-80">
            Clear All
          </div>
          <div onClick={() => clickSearch()} className="sub-h2 text-white cursor-pointer hover:opacity-80">
            Apply
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
