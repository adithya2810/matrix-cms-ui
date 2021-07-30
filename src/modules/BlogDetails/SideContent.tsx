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
    video: <VideoIconBlog />,
    Article: <ArticleIconBlog />
  }

  return (
    <div className='col-span-4 laptop:mr-12'>
      <div className="blog-author-card relative bg-accent-dark text-white ">
        <div className="relative">
          <div style={mobile ? { width: 52, height: 45 } : { width: 133, height: 102 }} className="absolute -bottom-1 left-0">
            {typeObj[blogDetails?.type]}
          </div>
        </div>
        <div className='laptop:p-10 sm:p-4'>
          <div className="flex items-center laptop:mb-5 sm:mb-2.5">
            <img
              alt="profileImage"
              className='laptop:mr-5 sm:mr-2.5'
              src={blogDetails?.author?.[0]?.image_url}
              style={!mobile ? { height: 67, width: 67, borderRadius: 50 } : { height: 27, width: 27, borderRadius: 50 }} />
            <div>
              <h6 className='mb-2' style={!mobile ? { lineHeight: '30px' } : {}}>{blogDetails?.author?.[0]?.name}</h6>
              <div className="caption">{blogDetails?.author?.[0]?.designation}</div>
            </div>
          </div>
          {!showMore ?
            <div className="sub-h2">{blogDetails?.author?.[0]?.description?.slice(0, 200)}<span onClick={_ => setShowMore(true)} style={{ fontWeight: 700, cursor: 'pointer' }}> ...</span></div>
            :
            <div className="sub-h2">{blogDetails?.author?.[0]?.description}</div>
          }
        </div>
      </div>
      <div className="tags flex gap-2 laptop:py-6 sm:py-3 flex-wrap">
        {
          blogDetails?.tags?.map(tag => (
            <div key={tag.slug} className="sub-h2 border border-accent-dark laptop:p-2.5 sm:px-4 sm:py-1 cursor-pointer flex items-baseline">{tag.slug}</div>
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
