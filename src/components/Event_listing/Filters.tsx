import {
  LinkedInLaptop,
  SearchLaptop,
  TwitterLaptop,
  SearchMobile,
  LinkedInMobile,
  TwitterMobile,
  RightArrowAccentLaptop
} from '@components/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const Filters = ({ deviceType, pageType }) => {
  const router = useRouter();
  const SearchIcon = deviceType.mobile ? <SearchMobile /> : <SearchLaptop />;
  const LinkedInIcon = deviceType.mobile ? <LinkedInMobile /> : <LinkedInLaptop />
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;

  const [isTwitterBoxOpen, setIsTwitterBoxOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const [footerInView, setFooterInView] = useState(false);
  const [footerbottom, setFooterHeight] = useState(0);

  const handleClickEvent = (e: Event) => {
    if (filterRef?.current && !filterRef.current.contains(e.target))
      setIsFilterBoxOpen(false);
    setIsTwitterBoxOpen(false);
  };

  useEffect(() => {
    if (isFilterBoxOpen || isTwitterBoxOpen) document.addEventListener('click', handleClickEvent);

    return () => document.removeEventListener('click', handleClickEvent);
  }, [isFilterBoxOpen, isTwitterBoxOpen]);

  const handleFilter = (_) => {
    !deviceType.mobile && setIsFilterBoxOpen(!isFilterBoxOpen)
    setIsTwitterBoxOpen(false);
    if (deviceType.mobile && inputText) window.location.href = `${pageType ? '/' + pageType : ''}/events?search=${inputText}`;
  };

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputText.trim() != "") {
      window.location.href = `${pageType ? '/' + pageType : ''}/events?search=${inputText}`;
    }
  }

  useEffect(() => {
    setIsFilterBoxOpen(false);
    setIsTwitterBoxOpen(false);
    setInputText('');
  }, [router.asPath]);

  return (
    <>
      {/* Mask */}
      {isFilterBoxOpen && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed laptop:flex flex-row-reverse laptop:right-14 z-50 sm:left-8 sm:right-8" style={deviceType.mobile ? { top: footerInView ? 'auto' : '90vh', bottom: footerInView ? footerbottom : 'auto' } : { top: footerInView ? 'auto' : 375, bottom: footerInView ? 295 : 'auto' }}>
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
              value={inputText}
              placeholder="search for more events"
              onKeyDown={handleKeyDown}
            />
          </div>
          <a className="relative bg-white laptop:h-16 sm:w-10 flex justify-center items-center" style={deviceType.mobile ? {} : { width: 105, height: 70 }} href="https://www.linkedin.com/company/matrix-partners-india/" target="__blank">
            {LinkedInIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </a>
          <a className="relative bg-white laptop:h-16 flex sm:w-10 justify-center items-center" style={deviceType.mobile ? {} : { width: 105, height: 70 }} href="https://twitter.com/matrixindiavc" target="__blank"
          // onClick={() => {
          //   setIsTwitterBoxOpen(!isTwitterBoxOpen)
          //   setIsFilterBoxOpen(false)
          // }}
          >
            {TwitterIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-2 laptop:border-l-2 laptop:border-r-2 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </a>
        </div>
        {isFilterBoxOpen &&

          <div
            className="opened duration-300 top-0 z-50 sm:absolute"
            ref={filterRef}
            style={{ width: deviceType.mobile ? 'auto' : 400 }}
          >
            <div className={`search px-9 sm:hidden h-24 sm:h-14 flex items-center bg-accent`} style={deviceType.mobile ? {} : { height: 88 }}>
              <input
                className={`w-full  body1 border-none outline-none bg-accent text-white`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="search for more events"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div
              className={`px-14 py-5 sm:px-7 sm:py-5 bg-white hidden`}
              style={{ height: 'auto' }}
            >
              <div className="px-14 py-9 sm:px-7 sm:py-5 left-0 bottom-0 w-full bg-white">
                <div className="sub-h2 text-accent cursor-pointer hover:opacity-80 flex items-center">
                  See All Results <div className='relative top-0.5 left-2' ><RightArrowAccentLaptop /></div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className={`twitter_outerWarp opened duration-300 relative sm:absolute`} style={{ display: `${isTwitterBoxOpen ? 'block' : 'none'}`, bottom: (deviceType.mobile && footerInView) ? 'auto' : '55px' }}>
          <div className={`bg-white ${deviceType.mobile ? 'px-5 pt-5' : 'px-10 pt-10'}`}>
            <a className="twitter-timeline" href="https://twitter.com/MatrixPartners?ref_src=twsrc%5Etfw">Tweets by matrixindiavc</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>

      </div>
    </>
  );
};

export default Filters;
