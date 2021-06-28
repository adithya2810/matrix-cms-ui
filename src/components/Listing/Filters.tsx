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
} from '@components/Icons';
import React, { useEffect, useRef, useState } from 'react';

const Filters = ({ deviceType }) => {
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

  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setIsFilterBoxOpen(false);
  };

  useEffect(() => {
    let clickEvent;
    if (isFilterBoxOpen)
      clickEvent = document.addEventListener('click', handleClickEvent);

    return () => document.removeEventListener('click', clickEvent);
  }, [isFilterBoxOpen]);

  const handleFilter = (_) => setIsFilterBoxOpen(!isFilterBoxOpen);

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
              className={`transition-colors duration-500 search px-14 sm:px-7 h-24 sm:h-14 flex items-center ${
                inputText ? 'bg-accent' : 'bg-input'
              }`}
            >
              {inputText ? SearchIcon : SearchAccentIcon}
              <input
                className={`transition-colors duration-500 w-full pl-6 sm:pl-3 sub-h1 border-none outline-none placeholder-accent ${
                  inputText ? 'bg-accent text-white' : 'bg-input  text-accent'
                }`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search knowledgebase..."
              />
            </div>
            <div
              className={`transition-colors duration-700 filter-list px-14 py-10 sm:px-7 sm:py-5 ${
                inputText ? 'bg-input' : 'bg-accent-dark'
              }`}
              style={{ height: deviceType.mobile ? 400 : 570 }}
            >
              <ul className="sub-h1 text-white">
                <li className="py-4 sm:py-3  cursor-pointer hover:text-accent-light transition-colors duration-100">
                  <span className="mr-6">^</span>Matrix Moments
                </li>
                <li className="py-4 sm:py-3  cursor-pointer hover:text-accent-light transition-colors duration-100">
                  <span className="mr-6">^</span>Topics
                </li>
                <li className="py-4 sm:py-3  cursor-pointer hover:text-accent-light transition-colors duration-100">
                  <span className="mr-6">^</span>Authors
                </li>
                <li className="py-4 sm:py-3  cursor-pointer hover:text-accent-light transition-colors duration-100">
                  <span className="mr-6">^</span>Content Format
                </li>
                <li className="py-4 sm:py-3  cursor-pointer hover:text-accent-light transition-colors duration-100">
                  <span className="mr-6">^</span>Sort By
                </li>
              </ul>
              <div className="px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full flex justify-between">
                <div className="sub-h2 text-accent-light underline cursor-pointer hover:opacity-80">
                  Clear All
                </div>
                <div className="sub-h2 text-white cursor-pointer hover:opacity-80">
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
