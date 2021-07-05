import React, { FC } from 'react'



type deviceType = {
  mobile: Boolean;
};

type propsType = {
  blogDetails: any;
  deviceType: deviceType;
};

const contentType = {
  video: 'youtube_embed',
  audio: 'youtube_embed',
}


const Blog: FC<propsType> = ({ deviceType: { mobile }, blogDetails }) => {
  return (
    <div className='col-span-8 laptop:mr-36 relative laptop:mt-16 sm:mt-10' style={{ minHeight: 300 }}>
      <div className='absolute right-0 top-0'><div className='absolute bottom-0 sm:bg-accent laptop:bg-accent-dark text-white right-0 laptop:p-3 sm:p-1 sub-h2 flex justify-center items-center' style={{ width: !mobile ? 170 : 120 }}>34 min watch</div></div>
      {
        <div className='blog-content w-full mb-10' dangerouslySetInnerHTML={{ __html: blogDetails?.[contentType[blogDetails.type]] }} />
      }
      {/* <div dangerouslySetInnerHTML={{__html: blogDetails.content}} /> */}
      <div className='sub-h2'>{blogDetails?.content}</div>
    </div>
  )
}

export default Blog
