import React, { FC, useState  } from 'react';
import MainBanner from '../topBanner/mainBanner';
import PorfolioCompanies from '../porfolioCompanies/porfolioCompanies'



const RoleDescription:React.FC = () =>{

  return (
    <>
      <div className="hidden md:block sm:block">
      <MainBanner />
      </div>

      <div className="col-span-1 pl-32 sm:pl-7 md:pl-0 md:pr-0 md:pt-11 sm:pt-5 sm:pr-5 sm:pb-5 lg:pl-16 pb-16">
      <h3 className="hidden md:block sm:block text-4xl leading-none font-bold text-accent sm:uppercase sm:text-lg">Executive Assistant</h3>
      <p className="hidden md:block sm:block opacity-40  text-primary-dark home-content-tab3 leading-none  sm:uppercase  pt-2 sm:pt-1">{"("}Delhi - Aerocity{")"}</p>
          <h3 className="text-2xl leading-none font-bold text-black sm:uppercase sm:text-lg pt-8 sm:pt-5">JOB RESPONSIBILITIES</h3>
          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You're at the heart of your Manager’s operations and activities and the soul that keeps your Manager moving forward
          </p>
          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You anticipate the needs of your Manager and help in staying focused on their projects by resolving operational and administrative issues before they arise
          </p>

          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You move quickly with the changing environment and are up to date with the latest funding news
          </p>
          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You also use that knowledge to strategically support your Manager’s projects
          </p>
          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You manage an intense calendar M-F and give your best to make sure that nothing is even a minute late, and make the org run like clockwork
          </p>
          <p className="text-2xl leading-snug font-normal text-black pt-8 sm:text-lg sm:pt-5">
            You perform an array of administrative tasks (Manage calendars, book travel, and schedule facilities and equipment)
          </p>
          <h3 className="text-2xl leading-none font-bold text-black pt-16 sm:text-lg sm:pt-5 sm:uppercase">WHAT ARE WE LOOKING FOR</h3>
          <p className="text-2xl leading-snug font-normal text-black pt-6 sm:text-lg sm:pt-5">
            Years of Expericence : 3-14 Years
          </p>
          <h3 className="text-2xl leading-none font-bold text-accent pt-14 sm:text-lg sm:pt-5 sm:uppercase">Apply -{'>'}</h3>
      </div>
    </>

  );
};

export default RoleDescription;
