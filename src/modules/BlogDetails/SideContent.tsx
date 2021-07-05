import React, { FC } from 'react'
import RelatedVideos from './RelatedVideos';


type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
  relatedVideos: any,
};



const SideContent: FC<propsType> = ({ deviceType: { mobile }, blogDetails, relatedVideos }) => {
  const profileImage = `../../images/blog-details/blog-profile-${mobile ? 'mobile' : 'laptop'}.png`
  const videoImage = `../../images/blog-details/video-${mobile ? 'mobile' : 'laptop'}.png`
  return (
    <div className='col-span-3 laptop:mr-16'>
      <div className="blog-author-card relative bg-accent-dark text-white ">
        <div className="relative">
          <img src={videoImage} alt="video-symbol" className="absolute bottom-0 left-0" />
        </div>
        <div className='laptop:p-10 sm:p-4'>
          <div className="flex items-center laptop:mb-5 sm:mb-2.5">
            <img
              alt="profileImage"
              className='laptop:mr-5 sm:mr-2.5'
              src={blogDetails?.author?.[0]?.image_url}
              style={!mobile ? { height: 67, width: 67, borderRadius: 50 } : { height: 27, width: 27, borderRadius: 50 }} />
            <div>
              <h6 className='mb-2'>{blogDetails?.author?.[0]?.name}</h6>
              <div className="caption">{blogDetails?.author?.[0]?.designation}</div>
            </div>
          </div>
          <div className="sub-h2">{blogDetails?.author?.[0]?.description}</div>
        </div>
      </div>
      <div className="tags flex gap-2 laptop:py-6 sm:py-3">
        <div className="sub-h2 border border-accent-dark laptop:p-2.5 sm:px-4 sm:py-1 cursor-pointer flex items-baseline">Auto <span className='body2 opacity-80'>(123)</span></div>
        <div className="sub-h2 border border-accent-dark laptop:p-2.5 sm:px-4 sm:py-1 cursor-pointer flex items-baseline">Gaming <span className='body2 opacity-80'>(90)</span></div>
        <div className="sub-h2 border border-accent-dark laptop:p-2.5 sm:px-4 sm:py-1 cursor-pointer flex items-baseline">D2C <span className='body2 opacity-80'>(13)</span></div>
      </div>
      {!mobile &&
        <RelatedVideos mobile={mobile} relatedVideos={relatedVideos} />
      }
    </div>
  )
}

export default SideContent
