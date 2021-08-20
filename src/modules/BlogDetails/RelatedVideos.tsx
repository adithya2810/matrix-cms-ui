import { Tag, Image } from '@components';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { MicLaptop, MicMobile, ArticleLaptop, ArticleMobile, VideoMobile, VideoLaptop, LinkedInLaptop, LinkedInMobile, TwitterLaptop, TwitterMobile } from '@components/Icons';
import Link from 'next/link';

const MobileIcons = {
  Audio: <MicMobile />,
  video: <VideoMobile />,
  article: <ArticleMobile />,
};
const LaptopIcons = {
  Audio: <MicLaptop color="#000000" width={24} height={30} />,
  video: <VideoLaptop color="#000000" width={28} />,
  article: <ArticleLaptop color="#000000" width={24} height={25} />,
};

const Icon = ({ deviceType, iconType }) => {
  if (deviceType.mobile) return MobileIcons[iconType] || MobileIcons.article;
  else return LaptopIcons[iconType] || LaptopIcons.article;
};

type deviceType = {
  mobile: Boolean;
  relatedVideos: any;
};

const RelatedVideos: FC<deviceType> = ({ mobile, relatedVideos }) => {
  const { push } = useRouter()
  const imgPath = `../../images/blog-details/related-video-${mobile ? 'mobile' : 'laptop'}.png`

  const LinkedInIcon = mobile ? <LinkedInLaptop width="23" height="23" /> : <LinkedInLaptop width="23" height="23" color="rgba(1, 87, 110, 1)" />
  const TwitterIcon = mobile ? <TwitterMobile width="23" height="20" /> : <TwitterLaptop width="23" height="20" color="rgba(1, 87, 110, 1)" />;

  return (
    <div>
      <div className="sub-h1 flex items-center flex-wrap py-10 sm:py-5 sm:pl-5 sm:my-10 laptop:font-light" style={mobile ? { backgroundColor: 'rgba(235,235,235,1)' } : { fontSize: 23 }}>
        Share: <div className='flex items-baseline ml-4 -mt-1'>
          <div className='mr-2.5'>
            {LinkedInIcon}
          </div>
          <div>
            {TwitterIcon}
          </div>
        </div>
      </div>
      <h5 className='pb-8' style={{ fontSize: mobile ? 25 : 40 }}>Related Posts</h5>

      {relatedVideos?.map((v, i) => (
        <div key={`${i}-relativevideos`} className="card laptop:flex relative laptop:mb-16">
          <div className="sm:flex sm:justify-end">
            <div style={mobile ? { height: 'auto', width: 'calc(100% - 10px)', position: 'relative' } : {}}>
              {mobile && <>
                <div className="absolute" style={{ top: -6, left: 9, width: 'calc(100% - 20px)', height: 'calc(100% - 20px)', background: "#01576E" }}></div>
                {v.displaytag && <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0" style={mobile ? { zIndex: 2, left: 10, top: -6 } : {}}>{v.displaytag}</div>}
              </>}
              <img onClick={_ => push(`/blogs/${v.slug}`)} src={mobile ? v.cover_image_mobile : v.cover_desktop} alt="related-video-image" className='sm:left-2 sm:px-2 relative cursor-pointer' style={!mobile ? { height: 132, width: 151 } : { height: 178, width: '100%' }} />
            </div>
          </div>
          <div className="content-card bg-white sm:relative sm:-top-12 laptop:absolute laptop:top-5 laptop:-bottom-6 laptop:left-28 laptop:w-3/4 sm:w-10/12 laptop:py-3 laptop:px-6 sm:p-3" style={mobile ? {} : { width: 'calc(100% - 115px)' }}>
            <div className='caption opacity-70 laptop:hidden sm:mb-2'>{v.readtime?.toUpperCase()} READ</div>
            <div className="sub-h2 laptop:mb-2 sm:mb-3" style={mobile ? { fontSize: 18, lineHeight: '20px' } : { lineHeight: '20px', fontSize: 14 }}>
              <Link href={`/blogs/${v.slug}`}><a>{v.name}</a></Link>
            </div>
            {v.author.length > 0 && <>
              {!mobile ? <div className='flex justify-between laptop:mb-4 sm:mb-2.5'>
                <div className='caption font-normal' style={mobile ? {} : { fontSize: 11 }}>{v.author[0].name}</div>
                <div className='caption opacity-70 sm:hidden' style={mobile ? {} : { fontSize: 11 }}>{v.readtime?.toUpperCase()} READ</div>
              </div> :
                <div className="flex sm:mb-4" style={mobile ? { marginLeft: 5 } : { marginLeft: 20 }}>
                  <Image src={v.author[0].image_url} alt="profileImage" style={mobile ? { height: 28, minWidth: 28, borderRadius: 50 } : { height: 48, width: 48, borderRadius: 50 }} />
                  <div style={{ marginLeft: 15 }}>
                    <div className="font-medium text-lg leading-6 text-primary-dark sm:mb-1" style={mobile ? { fontSize: 14, lineHeight: '18px', letterSpacing: 1 } : { letterSpacing: 1 }}>
                      {v.author[0].name}
                    </div>
                    <div
                      className="mt-0.5 font-normal text-xs"
                      style={mobile ? { fontSize: 11, lineHeight: "14px", letterSpacing: 1, fontWeight: 500 } : { lineHeight: "14px", letterSpacing: 1 }}
                    >
                      {v.author[0].designation}
                    </div>
                  </div>
                </div>
              }
            </>}
            <div className='flex justify-between items-center'>
              {!mobile && <div className="sub-h2 text-accent-dark" style={mobile ? {} : { fontSize: 16 }}>
                <Link href={`/blogs/${v.slug}`}>
                  <a>Read More <img src='../../images/blog-details/arrow.png' alt='arrow' className='inline-block ml-2' /></a>
                </Link>
              </div>}
              <div className="sm:absolute sm:right-0 sm:top-0">
                <div className='sm:absolute sm:left-0 sm:top-0'>
                  <Icon deviceType={{ mobile }} iconType={v.content_type.name} />
                </div>
              </div>
            </div>
          </div>
          {mobile && <div className="flex flex-row flex-wrap sm:-mt-14 mb-5">
            {v.tags.map((item, index) => {
              return (
                <Tag
                  key={index}
                  title={item.name}
                  id={item.slug}
                  selected={false}
                  className="text-xs font-normal opacity-80 mr-2 bg-secondary-light"
                  style={{
                    lineHeight: "14px",
                    letterSpacing: "10%",
                    height: mobile ? 30 : 34,
                    fontSize: 12,
                    color: mobile ? "#000000" : "rgba(0, 0, 0, 0.65)",
                    border: 0,
                    background: "rgba(0, 0, 0, 0.08)",
                    marginBottom: 10,
                    fontWeight: mobile ? '500' : 'normal'
                  }}
                />
              );
            })}
          </div>}
        </div>
      )
      )}
    </div>
  )
}

export default RelatedVideos
