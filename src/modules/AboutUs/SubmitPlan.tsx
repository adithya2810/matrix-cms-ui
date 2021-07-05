import { RightArrowWhiteLaptop, RightArrowWhiteMobile } from '@components/Icons'
import React, { FC } from 'react'


type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};

const SubmitPlan: FC<propsType> = ({ deviceType: { mobile } }) => {
  const Arrow = mobile ? RightArrowWhiteMobile : RightArrowWhiteLaptop
  return (
    <div className='laptop:bg-secondary'>
      <div className='m-20 sm:m-10'>
        <h3 className='text-accent'>So what comes after you have shouted Eureka?</h3>
        <div className="sub-h1 mt-20 sm:mt-5">
          Founders are always first in our eyes, whether you have just a nascent idea or are already running a business, let us help you turn your ideas into reality and grow your business.
        </div>
        <div className='mt-40 sm:mt-24'>
          <div style={{ fontSize: mobile ? 14 : 28 }} className="sub-h1 w-full bg-accent text-white py-6 sm:py-2 flex justify-center cursor-pointer hover:opacity-90 relative items-center">
            Submit Your Business Plan <span className='absolute right-10 sm:right-5'><Arrow /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitPlan
