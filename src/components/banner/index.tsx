import React, { useState } from "react";

export type Props = {
  title: string;
  subTitle: string;
};

export const Banner: React.FC<Props> = ({ title, subTitle }) => {

  return (
    <div className="w-full bg-cover bg-center c-bg relative">
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white hero-txt font-bold sm:text-5xl">{title}</h1>
          <p className="text-white text-3xl">{subTitle}</p>
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
  );
};
