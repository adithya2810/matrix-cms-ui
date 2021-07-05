import { PlusLaptop, PlusMobile, SeedLaptop, RightArrowLaptop, RightArrowMobile, SeedMobile, SeriesALaptop, SeriesAMobile, SeriesBLaptop, SeriesBMobile } from '@components/Icons';
import React, { FC } from 'react'

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
};


const Stats: FC<propsType> = ({ deviceType }) => {
  const Plus = deviceType.mobile ? PlusMobile : PlusLaptop
  const Seed = deviceType.mobile ? SeedMobile : SeedLaptop
  const SeriesA = deviceType.mobile ? SeriesAMobile : SeriesALaptop
  const SeriesB = deviceType.mobile ? SeriesBMobile : SeriesBLaptop
  const Arrow = deviceType.mobile ? RightArrowMobile : RightArrowLaptop

  return (
    <div>
      {/* INDIA */}
      <h6 className='opacity-40 sm:mt-10 mt-16 sm:mx-8 mx-20'>INDIA</h6>
      <div className='flex laptop:justify-end sm:justify-center'>
        <div className="w-full laptop:flex laptop:bg-accent sm:text-accent laptop:text-white mt-10 laptop:mt-16 laptop:ml-20">
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 100 }} className='relative text-center'>$1B<span className='absolute laptop:-right-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black sm:hidden'>Under<br />Management</h6>
              <h6 className='text-center laptop:hidden'>Under Management</h6>
            </div>
          </div>
          <div className='sm:hidden w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 100 }} className='relative text-center'>60<span className='absolute right-0 sm:-right-4 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black'>Investments</h6>
            </div>
          </div>
        </div>
      </div>
      {/* GLOBAL */}
      <h6 className='opacity-40 sm:mt-10 mt-16 sm:mx-8 mx-20'>GLOBAL</h6>
      <div className='laptop:flex laptop:justify-end'>
        <div className="w-full laptop:flex laptop:bg-accent sm:text-accent laptop:text-white mt-10 laptop:mt-16 laptop:ml-20">
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 100 }} className='relative text-center'>65<span className='absolute -right-9 sm:-right-6 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black'>IPOs</h6>
            </div>
          </div>
          <div className='w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 100 }} className='relative text-center'>110<span className='absolute -right-3 sm:-right-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black'>Profitable<br />Acqusitions</h6>
            </div>
          </div>
          <div className='w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 100 }} className='relative text-center'>$5B<span className='absolute -right-8 sm:-right-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black'>Invested</h6>
            </div>
          </div>
        </div>
      </div>
      <h6 className='opacity-40 sm:mt-10 mt-16 sm:mx-8 mx-20 mb-10'>EARLY STAGE INVESTORS</h6>
      <div className='flex sm:mx-8 ml-20 text-accent justify-evenly items-end mb-5 sm:mb-20'>
        <div>
          <div><Seed /></div>
          <h6 className='text-center mt-10'>SEED</h6>
        </div>
        <div className='self-start mt-6 laptop:mt-14'>
          <Arrow />
        </div>
        <div>
          <div><SeriesA /></div>
          <h6 className='text-center mt-10'>SERIES A</h6>
        </div>
        <div className='self-start mt-6 laptop:mt-14'>
          <Arrow />
        </div>
        <div>
          <div><SeriesB /></div>
          <h6 className='text-center mt-10'>SERIES B</h6>
        </div>
      </div>
    </div>
  )
}

export default Stats
