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
  SelectNoneLaptop,
  InstagramLaptop,
  InstagramMobile
} from '@components/Icons';
import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';


const initialFilters = { moments: [], sort: 'asc', topics: [], authors: [], formats: [] }


const Filters = ({ deviceType, fetchBlogsData, remfilter }) => {

  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isTwitterBoxOpen, setIsTwitterBoxOpen] = useState(false);
  const [isLinkedInBoxOpen, setIsLinkedInBoxOpen] = useState(false);
  const filterRef = useRef(null);
  const [openedFilter, setOpenedFilter] = useState('')

  const [momentsf, setMomentsf] = useState([])
  const [topicsf, setTopicsf] = useState([])
  const [authorsf, setAuthorsf] = useState([])
  const [formatsf, setFormatsf] = useState([])

  const [moments, setMoments] = useState([])
  const [topics, setTopics] = useState([])
  const [authors, setAuthors] = useState([])
  const [formats, setFormats] = useState([])

  const [filters, setFilters] = useState(() => initialFilters)
  const [footerInView, setFooterInView] = useState(false);
  const [footerbottom, setFooterHeight] = useState(0);

  useEffect(() => {
    fetchFiltersMetaData();
  }, [])

  useEffect(() => {
    if (remfilter) {
      let rmflt = initialFilters;
      if (remfilter) {
        for (const key in filters) {
          if (Object.prototype.hasOwnProperty.call(filters, key)) {
            let fldata = filters[key];
            if (_.indexOf(fldata, remfilter) != -1) {
              fldata.splice(_.indexOf(fldata, remfilter), 1);
              rmflt[key] = fldata;
            } else {
              rmflt[key] = fldata.length > 0 ? ((key == 'sort') ? 'desc' : []) : fldata;
            }
          }
        }
      }
      setFilters(rmflt);
      fetchBlogsData(1, rmflt);
      setIsFilterBoxOpen(false);
      setIsTwitterBoxOpen(false);
      setIsLinkedInBoxOpen(false);
      searchFilterOption('')
    }
  }, [remfilter]);

  const searchFilterOption = value => {
    setInputText(value);
    if (value) {
      if (momentsf.length > 0) {
        let mtms = momentsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setMoments(mtms)
      }
      if (topicsf.length > 0) {
        let src = topicsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setTopics(src)
      }
      if (authorsf.length > 0) {
        let atrs = authorsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setAuthors(atrs)
      }
      if (formatsf.length > 0) {
        let frmts = formatsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setFormats(frmts)
      }
    } else {
      setTopics(topicsf)
      setAuthors(authorsf)
      setFormats(formatsf)
    }
  }

  const fetchFiltersMetaData = async () => {
    try {
      const resTopics = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?_sort=name:asc`)
      const resJsonTopics = await resTopics.json();
      const tpc = resJsonTopics.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }));
      setTopicsf(tpc)
      setTopics(tpc)

      const resAuthors = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/people?_sort=name:asc`)
      const resJsonAuthors = await resAuthors.json();
      const atrs = resJsonAuthors.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }))
      setAuthorsf(atrs)
      setAuthors(atrs)

      const resCnt = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/contents?_sort=name:asc`)
      const resJsonCnt = await resCnt.json();
      const frmt = resJsonCnt.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }))
      setFormatsf(frmt);
      setFormats(frmt);

      const mmtCnt = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blog-types?_sort=name:asc`)
      const resJsonmmt = await mmtCnt.json();
      const frmtmmt = resJsonmmt.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }))
      setMomentsf(frmtmmt);
      setMoments(frmtmmt)
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
  const InstagramIcon = deviceType.mobile ? <InstagramMobile /> : <InstagramLaptop />;
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;
  const FilterIcon = deviceType.mobile ? <FilterMobile /> : <FilterLaptop width="20" />;


  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setIsFilterBoxOpen(false);
    setIsTwitterBoxOpen(false);
    setIsLinkedInBoxOpen(false);
  };

  useEffect(() => {
    if (isFilterBoxOpen || isTwitterBoxOpen || isLinkedInBoxOpen) document.addEventListener('click', handleClickEvent);
    return () => document.removeEventListener('click', handleClickEvent);
  }, [isFilterBoxOpen, isTwitterBoxOpen, isLinkedInBoxOpen]);


  const handleFilter = (_) => setIsFilterBoxOpen(!isFilterBoxOpen);

  const getTag = ({ isSelected, setSelected, tagName, tagNumber, index }) => {
    return <div key={tagName + index} onClick={setSelected} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 16, fontWeight: 300 }}>
      {capitalize(tagName)} <span className="laptop:font-normal" style={deviceType.mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!tagNumber && `(${tagNumber})`}</span>
    </div>
  }

  // console.log({ filters });

  function isElementOutViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setFooterInView(!isElementOutViewport(document.querySelector(".FooterOuter-Warpper")));
      setFooterHeight(document.querySelector(".FooterOuter-Warpper").clientHeight);
    })
    return () => setFooterInView(false);
  }, []);

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

  return (
    <>
      {/* Mask */}
      {(isFilterBoxOpen || isTwitterBoxOpen || isLinkedInBoxOpen) && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className={`${footerInView ? 'laptop:bottom-80' : 'laptop:top-32 sm:bottom-8'} transition duration-500 ease-in-out fixed laptop:right-12 z-50 sm:left-8 sm:right-8 overflow-y-hidden`}
        style={deviceType.mobile && footerInView ? { bottom: (isFilterBoxOpen && deviceType.mobile) ? 20 : footerbottom + 16 } : {}}
      >
        {(!isFilterBoxOpen && !isTwitterBoxOpen && !isLinkedInBoxOpen) && (
          // when filter box is closed state
          <div
            className="closed duration-300 w-18 cursor-pointer sm:flex sm:w-full"
          >
            <div className="search h-20 sm:h-12 sm:w-12  bg-accent flex justify-center items-center"
              onClick={handleFilter}
            >
              {SearchIcon}
            </div>
            <div className="filter flex laptop:flex-col sm:flex-row-reverse laptop:justify-evenly sm:justify-center items-center laptop:h-64 sm:h-12 sm:flex-grow bg-accent-dark"
              onClick={handleFilter}>
              <div className="sub-h1 mb-2 laptop:transform laptop:-rotate-90 relative laptop:top-10 laptop:mx-3 text-white sm:ml-4 sm:mb-1" style={deviceType.mobile ? {} : { fontSize: 18, fontWeight: 300 }}>
                Filters
              </div>
              {FilterIcon}
            </div>
            <div className="relative  bg-white laptop:h-16 sm:w-10 flex justify-center items-center"
              onClick={() => {
                setIsLinkedInBoxOpen(!isLinkedInBoxOpen)
              }}>
              {LinkedInIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </div>
            <div className="relative bg-white laptop:h-16 flex sm:w-10 justify-center items-center"
              onClick={() => {
                setIsTwitterBoxOpen(!isTwitterBoxOpen)
              }}
            >
              {TwitterIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </div>
            {/*<div className="relative bg-white laptop:h-16 flex sm:w-10 justify-center items-center">
              {InstagramIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </div>*/}
          </div>
        )}
        {isFilterBoxOpen && (
          //  filter box open state in mobile and laptop
          <div
            className="opened duration-300 relative"
            ref={filterRef}
            style={{ width: deviceType.mobile ? 'auto' : 400 }}
          >
            <div
              className="laptop:hidden flex justify-end"
              onClick={handleFilter}
            >
              <ClostBtn />
            </div>
            <div
              className={`transition-colors duration-500 search px-12 sm:px-5 h-20 sm:h-14 flex items-center bg-input`}
              style={deviceType.mobile ? { height: 50 } : { height: 75 }}
            >
              {SearchAccentIcon}
              <input
                className={`transition-colors duration-500 w-full pl-6 sm:pl-3 sub-h1 border-none outline-none placeholder-accent bg-input text-accent`}
                value={inputText}
                onChange={(e) => searchFilterOption(e.target.value)}
                placeholder="Search Knowledgebase..."
                style={deviceType.mobile ? { fontSize: 18, fontWeight: 400, lineHeight: '24px' } : { fontSize: 22 }}
              />
            </div>
            <div
              className={`transition-colors duration-700 filter-list px-14 py-10 sm:px-7 sm:py-5 bg-accent-dark`}
              style={{ height: deviceType.mobile ? 'calc(100vh - 230px)' : 432 }}
            >
              <ul className="sub-h1 text-white filters-overflow" style={{ overflowY: 'scroll', maxHeight: 330 }}>

                {/* matrix moments */}
                {moments.length > 0 && <>
                  <li className="py-2 sm:py-2  flex items-center ">
                    <div style={deviceType.mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'moments') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'moments' ? setOpenedFilter('') : setOpenedFilter('moments')} className="flex items-center cursor-pointer hover:text-accent-light">
                      <span className='mr-5 sm:mr-2' style={{ display: 'block', zIndex: 1 }}>{openedFilter === 'moments' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Matrix Moments
                    </div>
                    {
                      openedFilter === 'moments' &&
                      <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline' style={deviceType.mobile ? {} : { fontSize: 16 }}>
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
                      {moments.map((t, i) => getTag({
                        isSelected: filters.moments.includes(t.slug),
                        setSelected: _ => setFilters({
                          ...filters, moments: filters.moments.includes(t.slug) ? filters.moments.filter(m => m !== t.slug) : [...filters.moments, t.slug]
                        }),
                        index: i,
                        ...t
                      }))}
                    </div>
                  }
                </>}

                {/* Topics */}
                {topics.length > 0 && <>
                  <li className="py-4 sm:py-2  flex items-center">
                    <div style={deviceType.mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'topics') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'topics' ? setOpenedFilter('') : setOpenedFilter('topics')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5 sm:mr-2'>{openedFilter === 'topics' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Topics</div>
                    {
                      openedFilter === 'topics' &&
                      <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline' style={deviceType.mobile ? {} : { fontSize: 16 }}>
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
                      {topics.map((t, i) => getTag({ isSelected: filters.topics.includes(t.slug), setSelected: _ => setFilters({ ...filters, topics: filters.topics.includes(t.slug) ? filters.topics.filter(m => m !== t.slug) : [...filters.topics, t.slug] }), ...t, index: i }))}
                    </div>
                  }
                </>}

                {/* Authors */}
                {authors.length > 0 && <>
                  <li className="py-4 sm:py-2  flex items-center">
                    <div style={deviceType.mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'authors') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'authors' ? setOpenedFilter('') : setOpenedFilter('authors')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5 sm:mr-2'>{openedFilter === 'authors' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Authors</div>
                    {
                      openedFilter === 'authors' &&
                      <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline' style={deviceType.mobile ? {} : { fontSize: 16 }}>
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
                      {authors.map((t, i) => getTag({
                        isSelected: filters.authors.includes(t.slug),
                        setSelected: _ => setFilters({
                          ...filters,
                          authors: filters.authors.includes(t.slug) ? filters.authors.filter(m => m !== t.slug) : [...filters.authors, t.slug]
                        }),
                        ...t,
                        index: i
                      })
                      )}
                    </div>
                  }
                </>}

                {/* Content Format */}
                {formats.length > 0 && <>
                  <li className="py-4 sm:py-2  flex items-center">
                    <div style={deviceType.mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'formats') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'formats' ? setOpenedFilter('') : setOpenedFilter('formats')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5 sm:mr-2'>{openedFilter === 'formats' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Content Formats</div>
                    {
                      openedFilter === 'formats' &&
                      <span className=' sub-h2 ml-auto flex gap-3 text-white items-baseline' style={deviceType.mobile ? {} : { fontSize: 16 }}>
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
                      {formats.map((t, i) => getTag({
                        isSelected: filters.formats.includes(t.slug),
                        setSelected: _ => setFilters({
                          ...filters,
                          formats: filters.formats.includes(t.slug) ? filters.formats.filter(m => m !== t.slug) : [...filters.formats, t.slug]
                        }),
                        ...t,
                        index: i
                      })
                      )}
                    </div>
                  }
                </>}

                {inputText == '' && <>
                  <li className="py-4 sm:py-2  flex items-center">
                    <div style={deviceType.mobile ? { fontWeight: 300 } : { fontSize: 23, fontWeight: 200, color: (openedFilter && openedFilter != 'sort') ? '#ffffff8f' : '#ffffff' }} onClick={_ => openedFilter === 'sort' ? setOpenedFilter('') : setOpenedFilter('sort')} className="mr-6 flex items-center cursor-pointer hover:text-accent-light"><span className='mr-5 sm:mr-2'>{openedFilter === 'sort' ? <img src="/icons/downArrow.svg" /> : <img src="/icons/upArrow.svg" />}</span>Sort By</div>
                  </li>
                  {openedFilter === 'sort' && <div className='flex flex-wrap'>
                    {getTag({ isSelected: filters.sort === 'asc', setSelected: _ => setFilters({ ...filters, sort: 'asc' }), tagName: 'Ascending', tagNumber: 0, index: 'asc' })}
                    {getTag({ isSelected: filters.sort === 'desc', setSelected: _ => setFilters({ ...filters, sort: 'desc' }), tagName: 'Descending', tagNumber: 0, index: 'desc' })}
                  </div>}
                </>}
              </ul>
              <div className="bg-accent-dark px-14 py-5 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full flex justify-between">
                <div onClick={() => {
                  setFilters(initialFilters);
                  fetchBlogsData();
                  setIsFilterBoxOpen(false);
                  setIsTwitterBoxOpen(false);
                  setIsLinkedInBoxOpen(false);
                  searchFilterOption('')
                }} className="sub-h2 text-accent-light underline cursor-pointer hover:opacity-80">
                  Clear All
                </div>
                <div onClick={_ => {
                  fetchBlogsData(1, filters)
                  setIsFilterBoxOpen(false);
                  setIsTwitterBoxOpen(false);
                  setIsLinkedInBoxOpen(false)
                }} className="sub-h2 text-white cursor-pointer hover:opacity-80">
                  Apply
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`twitter_outerWarp opened duration-300 relative`} style={{ display: `${isTwitterBoxOpen ? 'block' : 'none'}` }}>
          <div className={`bg-white ${deviceType.mobile ? 'px-5 pt-5' : 'px-10 pt-10'}`}>
            <a className="twitter-timeline" href="https://twitter.com/matrixindiavc?ref_src=twsrc%5Etfw">Tweets by matrixindiavc</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
        {/* <div className="twitter_outerWarp opened duration-300 relative" style={{ display: `${isLinkedInBoxOpen ? 'block' : 'none'}` }}>
          <iframe src="https://www.linkedin.com/company/matrix-partners/" name="linkedinFrame" scrolling="no" frameBorder="1" marginHeight={0} marginWidth={0}></iframe>
        </div> */}
      </div>
    </>
  );
};

export default Filters;
