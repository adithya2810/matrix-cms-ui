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
  RightArrowAccentLaptop
} from '@components/Icons';
import React, { useEffect, useRef, useState } from 'react';

const SearchMoreLaptop = ({ deviceType }) => {
  const SearchIcon = deviceType.mobile ? <SearchMobile /> : <SearchLaptop />;
  const LinkedInIcon = deviceType.mobile ? <LinkedInMobile /> : <LinkedInLaptop />
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;
  const FilterIcon = deviceType.mobile ? <FilterMobile /> : <FilterLaptop />;

  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const [footerInView, setFooterInView] = useState(false);

  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setIsFilterBoxOpen(false);
  };

  useEffect(() => {
    if (isFilterBoxOpen) document.addEventListener('click', handleClickEvent);

    return () => document.removeEventListener('click', handleClickEvent);
  }, [isFilterBoxOpen]);

  const handleFilter = (_) => setIsFilterBoxOpen(!isFilterBoxOpen);

  function isElementOutViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (!deviceType.mobile) {
        setFooterInView(!isElementOutViewport(document.querySelector(".FooterOuter-Warpper")));
      }
    })
    return () => setFooterInView(false);
  }, []);

  return (
    <>
      {/* Mask */}
      {isFilterBoxOpen && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed laptop:flex flex-row-reverse laptop:right-14 z-50 sm:left-8 sm:right-8 overflow-y-hidden" style={{ top: deviceType.mobile ? '90vh' : footerInView ? 'auto' : 375, bottom: footerInView ? 280 : 'auto' }}>
        <div
          className="closed duration-300 w-16 cursor-pointer sm:flex sm:w-full" style={deviceType.mobile ? {} : { width: 105, height: 'auto' }}
        >
          <div style={deviceType.mobile ? {} : { width: 105, height: 88 }}
            onClick={handleFilter}
            className="search h-16 sm:h-12 sm:w-12  bg-accent-dark flex justify-center items-center">
            {SearchIcon}
          </div>
          <div className={`search laptop:hidden w-auto h-24 sm:h-12 flex items-center bg-accent`}>
            <input
              className={`w-full px-3  body1 border-none outline-none  bg-accent text-white`}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="search for more blogs"
            />
          </div>
          <div className="relative bg-white laptop:h-16 sm:w-10 flex justify-center items-center" style={deviceType.mobile ? {} : { width: 105, height: 70 }}>
            {LinkedInIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </div>
          <div className="relative bg-white laptop:h-16 flex sm:w-10 justify-center items-center" style={deviceType.mobile ? {} : { width: 105, height: 70 }}>
            {TwitterIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </div>
        </div>
        {isFilterBoxOpen &&

          <div
            className="opened duration-300 top-0 z-50 sm:absolute"
            ref={filterRef}
            style={{ width: deviceType.mobile ? 'auto' : 500 }}
          >
            <div className={`search px-9 sm:hidden h-24 sm:h-14 flex items-center bg-accent`} style={deviceType.mobile ? {} : { height: 88 }}>
              <input
                className={`w-full  body1 border-none outline-none  bg-accent text-white`}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="search for more blogs"
              />
            </div>
            <div
              className={`px-14 py-10 sm:px-7 sm:py-5 bg-white`}
              style={{ height: 600 }}
            >
              <div className="caption text-accent-dark opacity-70 mb-3">FOUND..</div>
              <h5 className='text-accent'>87654</h5>
              <div className="body1 text-accent-dark mb-7">Articles</div>
              <h5 className='text-accent'>59</h5>
              <div className="body1 text-accent-dark mb-7">Podcasts</div>
              <h5 className='text-accent'>14</h5>
              <div className="body1 text-accent-dark">Videos</div>

              <div className="px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full">
                <div className="sub-h2 text-accent cursor-pointer hover:opacity-80 flex items-center ">
                  See All Results <div className='relative top-0.5 left-2' ><RightArrowAccentLaptop /></div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </>
  );
};

export default SearchMoreLaptop;
