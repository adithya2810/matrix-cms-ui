import React, { FC, useState } from 'react'
import RelatedVideos from './RelatedVideos';
import { VideoIconBlog, MicIconBlog, ArticleIconBlog } from '@components/Icons'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
  relatedVideos: any,
};

const SideContent: FC<propsType> = ({ deviceType: { mobile }, blogDetails, relatedVideos }) => {
  const [showMore, setShowMore] = useState(false)
  const typeObj = {
    Audio: <MicIconBlog />,
    Video: <VideoIconBlog />,
    Article: <ArticleIconBlog />
  }

  return (
    <div className='col-span-4 laptop:mr-16'>
      <div className="blog-author-card relative bg-accent-dark text-white ">
        <div className="relative">
          <div style={mobile ? { width: 52, height: 45 } : { width: 105, height: 88 }} className="absolute -bottom-1 left-0">
            {typeObj[blogDetails?.content_type?.name]}
          </div>
        </div>
        <div className='laptop:p-8 sm:p-4'>
          <div className="flex items-center laptop:mb-5 sm:mb-2.5">
            <img
              alt="profileImage"
              className='laptop:mr-5 sm:mr-2.5'
              src={blogDetails?.author?.[0]?.image_url}
              style={!mobile ? { height: 55, width: 55, borderRadius: 50 } : { height: 27, width: 27, borderRadius: 50 }} />
            <div>
              <h6 className='mb-2 font-light' style={!mobile ? { lineHeight: '25px', fontSize: 25, letterSpacing: 1.5 } : { fontSize: 14, letterSpacing: 2 }}>{blogDetails?.author?.[0]?.name}</h6>
              <div className="caption" style={mobile ? {} : { lineHeight: '10px' }}>{blogDetails?.author?.[0]?.designation}</div>
            </div>
          </div>
          {!showMore ? <>
            <div className="sub-h2" style={mobile ? { fontWeight: 400, lineHeight: '20px' } : { lineHeight: '23px', fontSize: 15, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: `${blogDetails?.author?.[0]?.description?.slice(0, 200)}` }}></div>
            <span onClick={_ => setShowMore(true)} style={{ fontWeight: 700, cursor: 'pointer' }}> ...</span>
          </> :
            <div className="sub-h2" style={mobile ? { fontWeight: 400, lineHeight: '20px' } : { lineHeight: '23px', fontSize: 15, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: blogDetails?.author?.[0]?.description }}></div>
          }
        </div>
      </div>
      <div className="tags flex gap-2 laptop:py-6 sm:py-3 flex-wrap">
        {
          blogDetails?.tags?.map(tag => (
            <div key={tag.name} className="sub-h2 border border-accent-dark laptop:p-2.5 sm:px-4 sm:py-1 cursor-pointer flex items-baseline" style={mobile ? {} : { fontSize: 16 }}>{tag.name} <small className="text-xs pl-2 opacity-70" style={mobile ? {} : { fontSize: 11 }}>({tag.blogs.length})</small></div>
          ))
        }
      </div>
      {!mobile &&
        <RelatedVideos mobile={mobile} relatedVideos={relatedVideos} />
      }
    </div>
  )
}

export default SideContent
