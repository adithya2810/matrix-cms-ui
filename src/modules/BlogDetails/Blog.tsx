import React, { FC } from 'react'



type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};


const Blog: FC<propsType> = ({ deviceType: { mobile } }) => {
  return (
    <div className='col-span-8 border laptop:mr-40 relative sm:mt-10' style={{ minHeight: 300 }}>
      <div className='absolute right-0 top-0'><div className='absolute bottom-0 sm:bg-accent laptop:bg-accent-dark text-white right-0 laptop:p-3 sm:p-1 sub-h2 flex justify-center items-center' style={{ width: !mobile ? 170 : 120 }}>34 min watch</div></div>
      this is blog
    </div>
  )
}

export default Blog
