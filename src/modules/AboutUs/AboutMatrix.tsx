import React, { FC } from 'react'

const AboutMatrix: FC = () => {
  return (
    <div className='bg-secondary'>
      <h6 className='opacity-40 sm:mt-10 mt-20 sm:mx-8 mx-20'>ABOUT MATRIX</h6>
      <h3 className='text-accent sm:mx-8 mx-20 sm:mt-20 mt-14 ma-about-fix ma-hide-mob'>Early-stage <br /> investors based<br /> in Mumbai,<br /> Bangalore and<br /> Delhi.</h3>
      <h3 className='text-accent sm:mx-8 mx-20 sm:mt-20 mt-14 ma-about-fix ma-hide-comp'>Early-stage investors based in Mumbai, Bangalore and Delhi.</h3>
      <div className="sub-h1 sm:mx-8 mx-20 sm:mt-10 mt-14 sm:mb-10 mb-20 ma-font-fixa">
        Matrix Partners began in Boston in 1977, and today invests actively in the USA, India and China. Matrix Partners India was established in 2006, and invests across a variety of sectors including consumer technology, B2B, enterprise, fintech, among others.
      </div>
    </div >
  )
}

export default AboutMatrix
