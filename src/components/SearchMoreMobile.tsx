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
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const handleFilter = () => setIsSearchBoxOpen(!isSearchBoxOpen);

  return (
    <>
      {/* Mask */}
      {isSearchBoxOpen && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed bottom-8 left-8 right-8 z-50">
        {isSearchBoxOpen &&
          <>
            <div
              className="laptop:hidden flex justify-end"
              onClick={handleFilter}
            >
              <ClostBtn />
            </div>
            <div
              className="opened duration-300 top-0 z-50 w-full bg-white"
              ref={filterRef}
              style={{ height: 400 }}
            >
              <div
                className={`px-14 py-10 sm:px-7 sm:py-5`}
              >
                <div className="caption text-accent-dark opacity-70 mb-3">FOUND..</div>
                <h5 className='text-accent'>87654</h5>
                <div className="body1 text-accent-dark mb-7">Articles</div>
                <h5 className='text-accent'>59</h5>
                <div className="body1 text-accent-dark mb-7">Podcasts</div>
                <h5 className='text-accent'>14</h5>
                <div className="body1 text-accent-dark">Videos</div>

                <div className="px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-14 w-full">
                  <div className="sub-h2 text-accent cursor-pointer hover:opacity-80 flex items-center ">
                    See All Results <div className='relative left-2' style={{ top: 1 }} ><RightArrowAccentLaptop /></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        <div
          className="closed duration-300 w-28 cursor-pointer sm:flex sm:w-full"
        >
          <div
            className="search h-24 sm:h-12 sm:w-12  bg-accent-dark flex justify-center items-center">
            {SearchIcon}
          </div>
          <div className={`search laptop:hidden w-auto h-24 sm:h-12 flex items-center bg-accent`}>
            <input
              className={`w-full px-3  body1 border-none outline-none  bg-accent text-white`}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="search for more blogs"
              onFocus={handleFilter}
              onBlur={handleFilter}
            />
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


      </div>
    </>
  );
};

export default SearchMoreLaptop;
