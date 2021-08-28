import moment from 'moment';
import React, { FC } from 'react'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
};

const Blog: FC<propsType> = ({ deviceType: { mobile }, blogDetails }) => {
  const typeObj = {
    Audio: 'listen',
    Video: 'watch',
    Article: 'read'
  }

  const contentTypeHtml = (data) => {
    if (data?.content_type?.name == "Article") {
      return '';
    }
    if (data?.content_type?.name == "Video") {
      return data?.youtube_embed
    }
    if (data?.content_type?.name == "Audio") {
      return data?.audioboomembed
    }
    // video: 'youtube_embed',
    // Audio: 'audioboomembed',
  }

  return (
    <div className='col-span-8 laptop:mr-36 relative laptop:mt-16 sm:mt-10' style={{ minHeight: 300 }}>
      <div className='absolute right-0 top-0'><div className='absolute bottom-0 sm:bg-accent laptop:bg-accent-dark text-white right-0 laptop:p-3 sm:p-1 sub-h2 flex justify-center items-center uppercase' style={{ width: !mobile ? 170 : 120 }}>{blogDetails?.readtime} {typeObj[blogDetails?.content_type?.name]}</div></div>
      {
        <div className={`blog-content w-full ${blogDetails?.date ? '' : 'mb-10'}`} dangerouslySetInnerHTML={{ __html: contentTypeHtml(blogDetails) }} />
      }
      {blogDetails?.date && <p className="mb-10 text-sm">{moment(blogDetails.date).format('Do MMM, YYYY')}</p>}
      <div className="blog-content pb-16 text-justify" dangerouslySetInnerHTML={{ __html: blogDetails?.content }} />
    </div>
  )
}

export default Blog
