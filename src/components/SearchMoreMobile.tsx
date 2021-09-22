import {
  LinkedInLaptop,
  SearchLaptop,
  TwitterLaptop,
  ClostBtn,
  SearchMobile,
  LinkedInMobile,
  TwitterMobile,
  RightArrowAccentLaptop
} from '@components/Icons';
import Link from 'next/link';
import router from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const SearchMoreLaptop = ({ deviceType, blogCount = { article: 0, audio: 0, video: 0 } }) => {
  const SearchIcon = deviceType.mobile ? <SearchMobile /> : <SearchLaptop />;
  const LinkedInIcon = deviceType.mobile ? <LinkedInMobile /> : <LinkedInLaptop />
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;

  const [inputText, setInputText] = useState('');
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(true);
  const [isTwitterBoxOpen, setIsTwitterBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const [footerInView, setFooterInView] = useState(false);
  const [footerbottom, setFooterHeight] = useState(0);

  const handleFilter = () => {
    // setIsSearchBoxOpen(!isSearchBoxOpen);
    // setIsTwitterBoxOpen(false);
    if (inputText.trim() != "") {
      router.push(`/matrixmoments?search=${inputText}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputText.trim() != "") {
      router.push(`/matrixmoments?search=${inputText}`);
    }
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

  return (
    <>
      {isSearchBoxOpen && isTwitterBoxOpen && !!inputText.length && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed bottom-8 left-8 right-8 z-50" style={{ top: footerInView ? 'auto' : '90vh', bottom: footerInView ? footerbottom : 'auto' }}>
        {isSearchBoxOpen && !!inputText.length &&
          <>
            {/* <div
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
                {<Link href={`/matrixmoments?content_type.name=Article`}><a>
                  <h5 className='text-accent'>{blogCount.article}</h5>
                  <div className="body1 text-accent-dark mb-7">Articles</div>
                </a></Link>}
                {<Link href={`/matrixmoments?content_type.name=Audio`}><a>
                  <h5 className='text-accent'>{blogCount.audio}</h5>
                  <div className="body1 text-accent-dark mb-7">Podcasts</div>
                </a></Link>}
                {<Link href={`/matrixmoments?content_type.name=Video`}><a>
                  <h5 className='text-accent'>{blogCount.video}</h5>
                  <div className="body1 text-accent-dark">Videos</div>
                </a></Link>}

                <div className="px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-14 w-full">
                  <div className="sub-h2 text-accent cursor-pointer hover:opacity-80 flex items-center " onClick={() => inputText && router.push(`/matrixmoments?search=${inputText}`)}>
                    See All Results <div className='relative left-2' style={{ top: 1 }} ><RightArrowAccentLaptop /></div>
                  </div>
                </div>
              </div>
            </div> */}
          </>
        }
        <div
          className="closed duration-300 w-28 cursor-pointer sm:flex sm:w-full"
        >
          <div
            onClick={handleFilter}
            className="search h-24 sm:h-12 sm:w-12  bg-accent-dark flex justify-center items-center">
            {SearchIcon}
          </div>
          {isSearchBoxOpen && <div className={`search laptop:hidden w-auto h-24 sm:h-12 flex items-center bg-accent`}>
            <input
              className={`w-full px-3  body1 border-none outline-none  bg-accent text-white`}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="search for more blogs"
              // onBlur={handleFilter}
              onKeyDown={handleKeyDown}
            />
          </div>}
          <a className="relative  bg-white laptop:h-24 sm:w-10 flex justify-center items-center" href="https://www.linkedin.com/company/matrix-partners/" target="__blank">
            {LinkedInIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-4 laptop:border-l-4 laptop:border-r-4 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </a>
          <a className="relative bg-white laptop:h-24 flex sm:w-10 justify-center items-center" href="https://twitter.com/matrixindiavc" target="__blank"
          // onClick={() => {
          //   setIsTwitterBoxOpen(!isTwitterBoxOpen)
          // }}
          >
            {TwitterIcon}
            <span className="absolute laptop:bottom-0 sm:right-0 laptop:w-full sm:h-full laptop:h-1/2 sm:w-1/2 laptop:border-b-4 laptop:border-l-4 laptop:border-r-4 sm:border-t-2 sm:border-r-2 sm:border-b-2 border-accent" />
          </a>
        </div>
        <div className={`twitter_outerWarp opened duration-300 absolute`} style={{ display: `${isTwitterBoxOpen ? 'block' : 'none'}`, bottom: footerInView ? 'auto' : '55px' }}>
          <div className={`bg-white ${deviceType.mobile ? 'px-5 pt-5' : 'px-10 pt-10'}`}>
            <a className="twitter-timeline" href="https://twitter.com/MatrixPartners?ref_src=twsrc%5Etfw">Tweets by matrixindiavc</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMoreLaptop;
