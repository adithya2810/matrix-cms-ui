import React, { useState } from "react";

export type Props = {
  title?: string;
  subTitle?: string;
  bannerImg?: any;
  mobileBannerImg?: any;
};

export const Banner: React.FC<Props> = ({ title, subTitle, bannerImg, mobileBannerImg }) => {

  return (
    <>
      <div className="sm:hidden w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImg})`, boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 40%)', backgroundSize: '100% 100%', height: '25rem' }}>
        <div className="flex border-b-4 border-accent border-solid items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h4 className="text-white text-6xl md:leading-10 font-bold xl:text-4xl sm:text-2xl">{title}</h4>
            <p className="text-white sub-h1 md:text-xl">{subTitle}</p>
            <div className="flex w-full relative position-bottom">

              {/* <div className="content-center m-auto">
              <button className="text-white pt-19p pl-3p btn-active-bg py-2 text-3xl ">
                CURRENT INVESTMENTS
              </button>
              <button className="txt-white pl-3p pt-19p py-2 text-3xl">
                PAST INVESTMENTS
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block hidden w-full bg-cover bg-center c-bg relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${mobileBannerImg})` }}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="p-8">
            <h1 className="text-white leading-tight text-5sm font-medium sm:text-left">{title}</h1>
            <p className="text-white text-xl sm:text-left">{subTitle}</p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
