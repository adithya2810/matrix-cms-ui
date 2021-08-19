import React from "react";
import { Banner } from '@components';

export type Props = {
  banner?: string;
  mobile: boolean;
};

const MainBanner: React.FC<Props> = ({ banner, mobile }) => {
  return (
    <>
      <div className="sm:hidden w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})`, boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 40%)', backgroundSize: '100% 100%', height: '25rem' }}>
        <div className="flex border-b-4 border-accent border-solid items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h4 className="text-white text-6xl md:leading-10 font-bold xl:text-4xl sm:text-2xl">We are company builders first.</h4>
            <p className="text-white sub-h1 md:text-xl">Our experience supports and amplifies companies over their lifespan</p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block hidden w-full bg-cover bg-center relative c-bg" style={mobile ? { height: 365, backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../../img/advisory-mobile-banner.png)` } : { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../../img/advisory-mobile-banner.png)` }}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="p-8">
            <h1 className="text-white leading-tight text-5sm font-medium sm:text-left" style={mobile ? { fontSize: 35, lineHeight: '40px' } : {}}>We are company builders first.</h1>
            <p className="text-white text-xl sm:text-left sm:font-medium sm:pt-2" style={mobile ? { fontSize: 18, lineHeight: '20px', letterSpacing: 0.25 } : {}}>Our experience supports and amplifies companies over their lifespan</p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

