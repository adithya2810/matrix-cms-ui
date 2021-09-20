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
  SelectAllLaptop,
  SelectNoneLaptop,
  InstagramLaptop,
  InstagramMobile
} from '@components/Icons';
import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';


const initialFilters = { topics: [], authors: [] };
// const initialFilters = { moments: [], sort: 'asc', topics: [], authors: [], formats: [] }


const Filters = ({ deviceType, data }) => {
  const { query } = useRouter();
  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isTwitterBoxOpen, setIsTwitterBoxOpen] = useState(false);
  const [isLinkedInBoxOpen, setIsLinkedInBoxOpen] = useState(false);
  const filterRef = useRef(null);
  const [openedFilter, setOpenedFilter] = useState('')

  const [momentsf, setMomentsf] = useState([])
  const [topicsf, setTopicsf] = useState(_.sortBy(data.tags, 'name'))
  const [authorsf, setAuthorsf] = useState(data.author)
  const [formatsf, setFormatsf] = useState([])

  const [moments, setMoments] = useState([])
  const [topics, setTopics] = useState(_.sortBy(data.tags, 'name'))
  const [authors, setAuthors] = useState(data.author)
  const [formats, setFormats] = useState([])

  const [filters, setFilters] = useState(initialFilters)
  const [footerInView, setFooterInView] = useState(false);
  const [footerbottom, setFooterHeight] = useState(0);

  // useEffect(() => {
  //   setTopicsf(data)
  //   setTopics(data)
  // }, [])

  const getQueryStr = (str: any) => {
    return str;
  }

  useEffect(() => {
    if (query.hasOwnProperty('filters')) {
      let dt = JSON.parse(getQueryStr(query.filters));
      if (dt.hasOwnProperty('topics') && dt.hasOwnProperty('authors'))
        setFilters({ topics: dt.topics, authors: dt.authors });
    }
  }, [query.filters])

  const searchFilterOption = value => {
    setInputText(value);
    if (value) {
      if (topicsf.length > 0) {
        let src = topicsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setTopics(src);
      }
      if (authorsf.length > 0) {
        let src = authorsf.filter((v) => v.tagName.match(new RegExp(value, 'gi')));
        setAuthors(src);
      }
    } else {
      setTopics(topicsf)
      setAuthors(authorsf)
      // setFormats(formatsf)
    }
  }

  // const fetchFiltersMetaData = async () => {
  //   try {
  //     const resTopics = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags?_sort=name:asc`)
  //     const resJsonTopics = await resTopics.json();
  //     const tpc = resJsonTopics.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }));
  //     setTopicsf(tpc)
  //     setTopics(tpc)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

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

  const getTag = ({ isSelected, setSelected, tagName, tagNumber, index, filter = '' }) => {
    return (filter == "sort" || tagNumber > 0) && <div key={tagName + index} onClick={setSelected} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 16, fontWeight: 300 }}>
      {capitalize(tagName)} <span className="laptop:font-normal" style={deviceType.mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!tagNumber && `(${tagNumber})`}</span>
    </div>
  }

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
      return str;
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
    if (Object.keys(filters).length > 0) {
      window.location.href = `/matrixmoments?filters=${JSON.stringify(filters)}`;
    }
  }

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
            <a className="relative  bg-white laptop:h-16 sm:w-10 flex justify-center items-center" href="https://www.linkedin.com/company/matrix-partners/" target="__blank">
              {LinkedInIcon}
              <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
            </a>
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
            style={{ width: deviceType.mobile ? 'auto' : '45vw', height: deviceType.mobile ? 'auto' : '80vh' }}
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
                placeholder="Search matrix moments..."
                style={deviceType.mobile ? { fontSize: 18, fontWeight: 400, lineHeight: '24px' } : { fontSize: 22 }}
              />
            </div>
            <div
              className={`transition-colors duration-700 filter-list px-14 py-10 sm:px-7 sm:py-5 bg-accent-dark`}
              style={{ height: deviceType.mobile ? 'calc(100vh - 230px)' : '100%' }}
            >
              <div className="flex flex-col" style={{ overflowY: 'auto', maxHeight: 'calc(100% - 100px)' }}>
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-white">Sectoral</p>
                  <div className='flex flex-wrap text-white'>
                    {topics.filter(v => v.sectoral).map((t, i) => {
                      const isSelected = filters.topics.includes(t.slug);
                      return <div key={i} onClick={() => setFilters({
                        ...filters, topics: filters.topics.includes(t.slug) ? filters.topics.filter(m => m !== t.slug) : [...filters.topics, t.slug]
                      })} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 14, fontWeight: 300 }}>
                        {t.slug == "d2c" ? t.tagName : capitalize(t.tagName)} <span className="laptop:font-normal" style={deviceType.mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!t.tagNumber && `(${t.tagNumber})`}</span>
                      </div>
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-white">Topics</p>
                  <div className='flex flex-wrap text-white'>
                    {topics.filter(v => !v.sectoral).map((t, i) => {
                      const isSelected = filters.topics.includes(t.slug);
                      return <div key={i} onClick={() => setFilters({
                        ...filters, topics: filters.topics.includes(t.slug) ? filters.topics.filter(m => m !== t.slug) : [...filters.topics, t.slug]
                      })} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 14, fontWeight: 300 }}>
                        {capitalize(t.tagName)} <span className="laptop:font-normal" style={deviceType.mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!t.tagNumber && `(${t.tagNumber})`}</span>
                      </div>
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-white">Authors</p>
                  <div className='flex flex-wrap text-white'>
                    {authors.length > 0 && authors.map((t, i) => {
                      const isSelected = filters.authors.includes(t.slug);
                      return <div key={i} onClick={() => setFilters({
                        ...filters, authors: filters.authors.includes(t.slug) ? filters.authors.filter(m => m !== t.slug) : [...filters.authors, t.slug]
                      })} className={`${isSelected ? 'bg-accent' : ''} sub-h2 border border-accent laptop:px-2 laptop:py-1 sm:py-1 sm:px-2 mr-2.5 mb-2.5 cursor-pointer hover:opacity-80`} style={deviceType.mobile ? {} : { fontSize: 14, fontWeight: 300 }}>
                        {capitalize(t.tagName)} <span className="laptop:font-normal" style={deviceType.mobile ? { fontSize: 10, lineHeight: '14px' } : { fontSize: 10, lineHeight: '14px' }}>{!!t.tagNumber && `(${t.tagNumber})`}</span>
                      </div>
                    })}
                  </div>
                </div>
              </div>
              <div className="bg-accent-dark px-14 py-5 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full flex justify-between">
                <div onClick={() => window.location.href = "/matrixmoments"} className="sub-h2 text-accent-light underline cursor-pointer hover:opacity-80">
                  Clear All
                </div>
                <div onClick={_ => {
                  clickSearch()
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
          <div className={`bg-white ${deviceType.mobile ? 'px-5 pt-5' : 'px-10 pt-10'} text-right`}>
            <script src="https://platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
            <script type="IN/FollowCompany" data-id="79774001" data-counter="bottom"></script>
            <iframe className="mb-5" scrolling={'no'} height="657" width="300" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6747788266340192256" title="Embedded post"></iframe>
            <iframe className="mb-5" scrolling={'no'} height="1214" width="300" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6835506247844868096" title="Embedded post"></iframe>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Filters;
