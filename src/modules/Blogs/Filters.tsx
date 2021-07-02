import {
  LinkedInLaptop,
  SearchLaptop,
  TwitterLaptop,
  ClostBtn,
  SearchMobile,
  FilterLaptop,
  SearchAccentMobile,
  LinkedInMobile,
  TwitterMobile,
  FilterMobile,
  SearchAccentLaptop,
  DownArrow,
  UpArrow,
  SelectAllLaptop,
  SelectNoneLaptop
} from '@components/Icons';
import React, { useEffect, useRef, useState } from 'react';


const initialFilters = { moments: [], sort: 'asc', topics: [], authors: [], formats: [] }


const Filters = ({ deviceType, fetchBlogsData, fetchBlogsDataWithFilters }) => {

  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterRef = useRef(null);
  const [openedFilter, setOpenedFilter] = useState('')
  const [moments, setMoments] = useState([{ tagName: 'Reflections', tagNumber: '123', slug: 'Reflections' }, { tagName: 'Foundations', tagNumber: '123', slug: 'Foundations' }, { tagName: 'Conferences', tagNumber: '123', slug: 'Conferences' }])
  const [topics, setTopics] = useState([])
  const [authors, setAuthors] = useState([])
  const [formats, setFormats] = useState(['Audio', 'Video', 'Article'])
  const [filters, setFilters] = useState(() => initialFilters)


  useEffect(() => {
    fetchFiltersMetaData();
  }, [])

  const fetchFiltersMetaData = async () => {
    try {
      const resTopics = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags`)
      const resJsonTopics = await resTopics.json();
      setTopics(resJsonTopics.map(r => ({ tagName: r.name, tagNumber: 0, slug: r.slug })))
      const resAuthors = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people`)
      const resJsonAuthors = await resAuthors.json();
      setAuthors(resJsonAuthors.map(r => ({ tagName: r.name, tagNumber: 0, slug: r.slug })))
    } catch (e) {
      console.log(e)
    }
  }

  const SearchIcon = deviceType.mobile ? <SearchMobile /> : <SearchLaptop />;
  const SearchAccentIcon = deviceType.mobile ? (
    <SearchAccentMobile />
  ) : (
    <SearchAccentLaptop />
  );
  const LinkedInIcon = deviceType.mobile ? (
    <LinkedInMobile />
  ) : (
    <LinkedInLaptop />
  );
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;
  const FilterIcon = deviceType.mobile ? <FilterMobile /> : <FilterLaptop />;


  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setIsFilterBoxOpen(false);
  };

  useEffect(() => {
    if (isFilterBoxOpen) document.addEventListener('click', handleClickEvent);
    return () => document.removeEventListener('click', handleClickEvent);
  }, [isFilterBoxOpen]);

  const handleFilter = (_) => setIsFilterBoxOpen(!isFilterBoxOpen);

  const getTag = ({ isSelected, setSelected, tagName, tagNumber }) => {
    return <div onClick={setSelected} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-3 laptop:py-2 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`}>{tagName} <span>{!!tagNumber && `(${tagNumber})`}</span></div>
  }

  const handleApplyFilters = () => {

  }

  return (
    <>
      {/* Mask */}
      {isFilterBoxOpen && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed laptop:right-14 z-50 laptop:top-36 sm:bottom-8 sm:left-8 sm:right-8 overflow-y-hidden">
        {!isFilterBoxOpen ? (
          // when filter box is closed state
          <div
            className="closed duration-300 w-28 cursor-pointer sm:flex sm:w-full"
            onClick={handleFilter}
          >
            <div className="search h-24 sm:h-12 sm:w-12  bg-accent flex justify-center items-center">
              {SearchIcon}
            </div>
            <div className="filter flex laptop:flex-col sm:flex-row-reverse laptop:justify-evenly sm:justify-center items-center laptop:h-96 sm:h-12 sm:flex-grow    bg-accent-dark">
              <div className="sub-h1 laptop:transform laptop:-rotate-90 relative laptop:top-10 text-white sm:ml-4">
                Filters
              </div>
              {FilterIcon}
            </div>
            <div className="relative  bg-white laptop:h-24 sm:w-10 flex justify-center items-center">
              {LinkedInIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-4 laptop:border-l-4 laptop:border-r-4 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </div>
            <div className="relative bg-white laptop:h-24 flex sm:w-10 justify-center items-center">
              {TwitterIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-4 laptop:border-l-4 laptop:border-r-4 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </div>
          </div>
        ) : (
          //  filter box open state in mobile and laptop
          <div
            className="opened duration-300 relative"
            ref={filterRef}
            style={{ width: deviceType.mobile ? 'auto' : 500 }}
          >
            <div
              className="laptop:hidden flex justify-end"
              onClick={handleFilter}
            >
              <ClostBtn />
            </div>
            <div
              className={`transition-colors duration-500 search px-14 sm:px-7 h-24 sm:h-14 flex items-center ${inputText ? 'bg-accent' : 'bg-input'
                }`}
            >
              {inputText ? SearchIcon : SearchAccentIcon}
              <input
                className={`transition-colors duration-500 w-full pl-6 sm:pl-3 sub-h1 border-none outline-none placeholder-accent ${inputText ? 'bg-accent text-white' : 'bg-input  text-accent'
                  }`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search knowledgebase..."
              />
            </div>
            <div
              className={`transition-colors duration-700 filter-list px-14 py-10 sm:px-7 sm:py-5 ${inputText ? 'bg-input' : 'bg-accent-dark'
                }`}
              style={{ height: deviceType.mobile ? 400 : 570 }}
            >
              <ul className="sub-h1 text-white" >

                {/* matrix moments */}
                <li className="py-4 sm:py-3  flex items-center ">
                  <div onClick={_ => openedFilter === 'moments' ? setOpenedFilter('') : setOpenedFilter('moments')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5'>{openedFilter === 'moments' ? <UpArrow /> : <DownArrow />}</span>Matrix Moments</div>
                  {
                    openedFilter === 'moments' &&
                    <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline'>
                      All
                      <div onClick={e => {
                        e.stopPropagation();
                        setFilters({ ...filters, moments: filters.moments.length === moments.length ? [] : moments.map(m => m.slug) })
                      }} className='sm:mt:1 laptop:mt-2 cursor-pointer'>{filters.moments.length === moments.length ? <SelectAllLaptop /> : <SelectNoneLaptop />}</div>
                    </span>
                  }
                </li>
                {
                  openedFilter === 'moments' &&
                  <div className='flex flex-wrap '>
                    {moments.map(t => getTag({ isSelected: filters.moments.includes(t.slug), setSelected: _ => setFilters({ ...filters, moments: filters.moments.includes(t.slug) ? filters.moments.filter(m => m !== t.slug) : [...filters.moments, t.slug] }), ...t }))}
                  </div>
                }


                {/* Topics */}
                <li className="py-4 sm:py-3  flex items-center">
                  <div onClick={_ => openedFilter === 'topics' ? setOpenedFilter('') : setOpenedFilter('topics')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5'>{openedFilter === 'topics' ? <UpArrow /> : <DownArrow />}</span>Topics</div>
                  {
                    openedFilter === 'topics' &&
                    <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline'>
                      All
                      <div onClick={e => {
                        e.stopPropagation();
                        setFilters({ ...filters, topics: filters.topics.length === topics.length ? [] : topics.map(m => m.slug) })
                      }} className='sm:mt:1 laptop:mt-2 cursor-pointer'>{filters.topics.length === topics.length ? <SelectAllLaptop /> : <SelectNoneLaptop />}</div>
                    </span>
                  }
                </li>
                {
                  openedFilter === 'topics' &&
                  <div className='flex flex-wrap filters-overflow' style={{ overflowY: 'scroll', maxHeight: 200 }}>
                    {topics.map(t => getTag({ isSelected: filters.topics.includes(t.slug), setSelected: _ => setFilters({ ...filters, topics: filters.topics.includes(t.slug) ? filters.topics.filter(m => m !== t.slug) : [...filters.topics, t.slug] }), ...t }))}
                  </div>
                }


                {/* Authors */}
                <li className="py-4 sm:py-3  flex items-center">
                  <div onClick={_ => openedFilter === 'authors' ? setOpenedFilter('') : setOpenedFilter('authors')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5'>{openedFilter === 'authors' ? <UpArrow /> : <DownArrow />}</span>Authors</div>
                  {
                    openedFilter === 'authors' &&
                    <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline'>
                      All
                      <div onClick={e => {
                        e.stopPropagation();
                        setFilters({ ...filters, authors: filters.authors.length === authors.length ? [] : authors.map(m => m.slug) })
                      }} className='sm:mt:1 laptop:mt-2 cursor-pointer'>{filters.authors.length === authors.length ? <SelectAllLaptop /> : <SelectNoneLaptop />}</div>
                    </span>
                  }
                </li>
                {
                  openedFilter === 'authors' &&
                  <div className='flex flex-wrap filters-overflow' style={{ overflowY: 'scroll', maxHeight: 200 }}>
                    {authors.map(t => getTag({ isSelected: filters.authors.includes(t.slug), setSelected: _ => setFilters({ ...filters, authors: filters.authors.includes(t.slug) ? filters.authors.filter(m => m !== t.slug) : [...filters.authors, t.slug] }), ...t }))}
                  </div>
                }




                {/* Content Format */}
                <li className="py-4 sm:py-3  flex items-center">
                  <div onClick={_ => openedFilter === 'formats' ? setOpenedFilter('') : setOpenedFilter('formats')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5'>{openedFilter === 'formats' ? <UpArrow /> : <DownArrow />}</span>Content Formats</div>
                  {
                    openedFilter === 'formats' &&
                    <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline'>
                      All
                      <div onClick={e => {
                        e.stopPropagation();
                        setFilters({ ...filters, formats: filters.formats.length === formats.length ? [] : formats })
                      }} className='sm:mt:1 laptop:mt-2 cursor-pointer'>{filters.formats.length === formats.length ? <SelectAllLaptop /> : <SelectNoneLaptop />}</div>
                    </span>
                  }
                </li>
                {
                  openedFilter === 'formats' &&
                  <div className='flex flex-wrap'>
                    {formats.map(t => getTag({ isSelected: filters.formats.includes(t), setSelected: _ => setFilters({ ...filters, formats: filters.formats.includes(t) ? filters.formats.filter(m => m !== t) : [...filters.formats, t] }), tagNumber: 0, tagName: t }))}
                  </div>
                }





                <li className="py-4 sm:py-3  flex items-center">
                  <div onClick={_ => openedFilter === 'sort' ? setOpenedFilter('') : setOpenedFilter('sort')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5'>{openedFilter === 'sort' ? <UpArrow /> : <DownArrow />}</span>Sort By</div>
                </li>
                {openedFilter === 'sort' && <div className='flex flex-wrap'>
                  {getTag({ isSelected: filters.sort === 'asc', setSelected: _ => setFilters({ ...filters, sort: 'asc' }), tagName: 'Ascending', tagNumber: 0 })}
                  {getTag({ isSelected: filters.sort === 'desc', setSelected: _ => setFilters({ ...filters, sort: 'desc' }), tagName: 'Descending', tagNumber: 0 })}
                </div>}
              </ul>
              <div className="bg-accent-dark px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full flex justify-between">
                <div onClick={() => {
                  setFilters(initialFilters);
                  fetchBlogsData();
                  setIsFilterBoxOpen(false)
                }} className="sub-h2 text-accent-light underline cursor-pointer hover:opacity-80">
                  Clear All
                </div>
                <div onClick={_ => {
                  fetchBlogsDataWithFilters(filters)
                  setIsFilterBoxOpen(false)
                }} className="sub-h2 text-white cursor-pointer hover:opacity-80">
                  Apply
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
