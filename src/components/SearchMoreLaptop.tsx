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
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import qs from 'qs';

const SearchMoreLaptop = ({ deviceType, blogCount }) => {
  const router = useRouter();
  const SearchIcon = deviceType.mobile ? <SearchMobile /> : <SearchLaptop />;
  const LinkedInIcon = deviceType.mobile ? <LinkedInMobile /> : <LinkedInLaptop />
  const TwitterIcon = deviceType.mobile ? <TwitterMobile /> : <TwitterLaptop />;
  const FilterIcon = deviceType.mobile ? <FilterMobile /> : <FilterLaptop />;

  const [isTwitterBoxOpen, setIsTwitterBoxOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const filterRef = useRef(null);

  const [footerInView, setFooterInView] = useState(false);

  const [articleCount, setArticleCount] = useState(0);
  const [audioCount, setAudioCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    const getbglCount = async (search) => {
      let makeQuery: any = {
        _or: [
          { 'name_contains': search },
          { 'tags.name_contains': search },
        ]
      };
      setArticleCount(await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/count?${qs.stringify({ _where: { 'content_type.name': 'Article', ...makeQuery } })}`)).json())
      setAudioCount(await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/count?${qs.stringify({ _where: { 'content_type.name': 'Audio', ...makeQuery } })}`)).json())
      setVideoCount(await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/count?${qs.stringify({ _where: { 'content_type.name': 'Video', ...makeQuery } })}`)).json())
    }
    if (inputText) {
      getbglCount(inputText);
    } else {
      setArticleCount(blogCount.article);
      setAudioCount(blogCount.audio);
      setVideoCount(blogCount.video);
    }
  }, [inputText]);

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
    setIsFilterBoxOpen(!isFilterBoxOpen)
    setIsTwitterBoxOpen(false);
  };

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputText.trim() != "") {
      router.push(`/matrixmoments?search=${inputText}`);
    }
  }

  return (
    <>
      {/* Mask */}
      {isFilterBoxOpen && (
        <div className="fixed z-10 top-0 left-0 h-screen w-full bg-black opacity-40 overflow-y-hidden" />
      )}

      <div className="fixed laptop:flex flex-row-reverse laptop:right-14 z-50 sm:left-8 sm:right-8 overflow-y-hidden" style={{ top: deviceType.mobile ? '90vh' : footerInView ? 'auto' : 375, bottom: footerInView ? 295 : 'auto' }}>
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
                placeholder="search for more blogs"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div
              className={`px-14 py-5 sm:px-7 sm:py-5 bg-white`}
              style={{ height: 'auto' }}
            >
              {/* <div className="caption text-accent-dark opacity-70 mb-3">FOUND..</div> */}
              {<Link href={`/matrixmoments?content_type.name=Article`}><a><h5 className='text-accent' style={deviceType.mobile ? {} : { fontSize: 35, lineHeight: '40px' }}>{articleCount}</h5>
                <div className="body1 text-accent-dark mb-3">Articles</div></a></Link>}

              {<Link href={`/matrixmoments?content_type.name=Audio`}><a><h5 className='text-accent' style={deviceType.mobile ? {} : { fontSize: 35, lineHeight: '40px' }}>{audioCount}</h5>
                <div className="body1 text-accent-dark mb-3">Podcasts</div></a></Link>}

              {<Link href={`/matrixmoments?content_type.name=Video`}><a><h5 className='text-accent' style={deviceType.mobile ? {} : { fontSize: 35, lineHeight: '40px' }}>{videoCount}</h5>
                <div className="body1 text-accent-dark pb-16">Videos</div></a></Link>}

              <div className="px-14 py-10 sm:px-7 sm:py-5 absolute left-0 bottom-0 w-full">
                <div className="sub-h2 text-accent cursor-pointer hover:opacity-80 flex items-center" onClick={() => inputText && router.push(`/matrixmoments?search=${inputText}`)}>
                  See All Results <div className='relative top-0.5 left-2' ><RightArrowAccentLaptop /></div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className={`twitter_outerWarp opened duration-300 relative`} style={{ display: `${isTwitterBoxOpen ? 'block' : 'none'}` }}>
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
