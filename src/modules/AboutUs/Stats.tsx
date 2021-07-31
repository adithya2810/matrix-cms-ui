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
              <div style={{ fontSize: deviceType.mobile ? 70 : 55 }} className='relative text-center'>$1B<span className='absolute laptop:-right-2 sm:top-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black ma-stats-fix'>Under {!deviceType.mobile && <div style={{ marginBottom: 10 }} />}Management</h6>
            </div>
          </div>
          <div className='sm:hidden w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 55 }} className='relative text-center'>60<span className='absolute right-2 sm:-right-4 sm:top-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black ma-stats-fix'>Investments</h6>
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
              <div style={{ fontSize: deviceType.mobile ? 70 : 55 }} className='relative text-center'>65<span className='absolute -right-7 sm:-right-5 sm:top-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black ma-stats-fix'>IPOs</h6>
            </div>
          </div>
          <div className='w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 55 }} className='relative text-center'>110<span className='absolute -right-1 sm:-right-5 sm:top-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black ma-stats-fix'>Profitable {!deviceType.mobile && <div style={{ marginBottom: 10 }} />}Acqusitions</h6>
            </div>
          </div>
          <div className='w-1 opacity-70 flex items-center'>
            <div className='bg-secondary h-5/6 w-full' />
          </div>
          <div className='w-full flex justify-center laptop:my-5'>
            <div className='sm:mb-10'>
              <div style={{ fontSize: deviceType.mobile ? 70 : 55 }} className='relative text-center'>$5B<span className='absolute -right-7 sm:-right-5 sm:top-5 top-6'><Plus /></span></div>
              <h6 className='text-center sm:text-black ma-stats-fix'>Invested</h6>
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
