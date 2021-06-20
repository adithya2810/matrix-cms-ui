import Icon from '@components/Icon';
import React, { FC } from 'react'

type deviceType = {
  mobile: Boolean;
};

const RelatedVideos: FC<deviceType> = ({ mobile }) => {
  const imgPath = `../../images/blog-details/related-video-${mobile ? 'mobile' : 'laptop'}.png`
  const linkedInImgPath = '../../images/blog-details/linkedin.png'
  const twitterImgPath = '../../images/blog-details/twitter.png'

  return (
    <div>
      <div className="sub-h1 flex items-center flex-wrap py-10">
        Share: <div className='flex items-baseline ml-4'>
          <img src={linkedInImgPath} alt="" className='mr-2.5' />
          <img src={twitterImgPath} alt="" />
        </div>
      </div>
      <h5 className='pb-8' style={{ fontSize: mobile ? 25 : 54 }}>Related Videos</h5>


      <div className="card laptop:flex relative laptop:mb-12">
        <img src={imgPath} alt="related-video-image" className='sm:left-6 relative' />
        <div className="content-card bg-white sm:relative sm:-top-12 laptop:absolute laptop:-bottom-6 laptop:left-36 laptop:w-3/4 sm:w-10/12 laptop:py-3 laptop:px-6 sm:p-3 ">
          <div className='caption opacity-70 laptop:hidden sm:mb-2'>4 MIN READ</div>
          <div className="sub-h2 laptop:mb-2">OZiva unplugged: building India’s leading clean, plant-based nutrition brand</div>
          <div className='flex justify-between laptop:mb-5 sm:mb-2.5'>
            <div className='caption'>BY TARUN DAVDA</div>
            <div className='caption opacity-70 sm:hidden'>4 MIN READ</div>
          </div>
          <div className='flex justify-between items-center'>
            <div className="sub-h2 text-accent-dark ">Read More <img src='../../images/blog-details/arrow.png' alt='arrow' className='inline-block ml-2' />
            </div>
            <Icon deviceType={{ mobile }} iconType={'mic'} />
          </div>
        </div>
      </div>


      <div className="card laptop:flex relative laptop:mb-12">
        <img src={imgPath} alt="related-video-image" className='sm:left-6 relative' />
        <div className="content-card bg-white sm:relative sm:-top-12 laptop:absolute laptop:-bottom-6 laptop:left-36 laptop:w-3/4 sm:w-10/12 laptop:py-3 laptop:px-6 sm:p-3 ">
          <div className='caption opacity-70 laptop:hidden sm:mb-2'>4 MIN READ</div>
          <div className="sub-h2 laptop:mb-2">OZiva unplugged: building India’s leading clean, plant-based nutrition brand</div>
          <div className='flex justify-between laptop:mb-5 sm:mb-2.5'>
            <div className='caption'>BY TARUN DAVDA</div>
            <div className='caption opacity-70 sm:hidden'>4 MIN READ</div>
          </div>
          <div className='flex justify-between items-center'>
            <div className="sub-h2 text-accent-dark ">Read More <img src='../../images/blog-details/arrow.png' alt='arrow' className='inline-block ml-2' />
            </div>
            <Icon deviceType={{ mobile }} iconType={'mic'} />
          </div>
        </div>
      </div>

      <div className="card laptop:flex relative laptop:mb-12">
        <img src={imgPath} alt="related-video-image" className='sm:left-6 relative' />
        <div className="content-card bg-white sm:relative sm:-top-12 laptop:absolute laptop:-bottom-6 laptop:left-36 laptop:w-3/4 sm:w-10/12 laptop:py-3 laptop:px-6 sm:p-3 ">
          <div className='caption opacity-70 laptop:hidden sm:mb-2'>4 MIN READ</div>
          <div className="sub-h2 laptop:mb-2">OZiva unplugged: building India’s leading clean, plant-based nutrition brand</div>
          <div className='flex justify-between laptop:mb-5 sm:mb-2.5'>
            <div className='caption'>BY TARUN DAVDA</div>
            <div className='caption opacity-70 sm:hidden'>4 MIN READ</div>
          </div>
          <div className='flex justify-between items-center'>
            <div className="sub-h2 text-accent-dark ">Read More <img src='../../images/blog-details/arrow.png' alt='arrow' className='inline-block ml-2' />
            </div>
            <Icon deviceType={{ mobile }} iconType={'mic'} />
          </div>
        </div>
      </div>




    </div>
  )
}

export default RelatedVideos
