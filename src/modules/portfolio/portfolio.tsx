import React, { useState } from "react";
import PortfolioHero from './portfolioHero';
import PastInvestment from './pastInvestment';
import CurrentInvestment from './currentInvestment';

export type Props = {
  portfolio: any[];
  deviceType: {
    mobile: boolean
  }
};

const Portfolio: React.FC<Props> = ({ portfolio, deviceType }) => {
  const [tabination, setTabination] = useState('currentInvest');
  return (
    <div>
      {/* <PortfolioHero deviceType={deviceType} /> */}
      <div className="w-full bg-cover bg-center bg-accent relative" style={{ boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 40%)', backgroundImage: 'url(/images/matrix-websitebanner-portfolio1.jpg)', backgroundSize: '100% 100%', height: '25rem' }}>
        <div className="flex border-b-4 border-accent border-solid items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h4 className="text-white text-6xl md:leading-10 font-bold xl:text-4xl sm:text-2xl">We take pride in our partners’ achievements.</h4>
            <p className="text-white sub-h1 md:text-xl"></p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="content-center m-auto tabination" style={deviceType.mobile ? {} : { top: '-3.8rem' }}>
          <button onClick={() => setTabination('currentInvest')}
            style={deviceType.mobile ? { fontSize: 13, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={tabination === 'currentInvest' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Current Investments
          </button>
          <button onClick={() => setTabination('pastInvest')}
            style={deviceType.mobile ? { fontSize: 13, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={tabination === 'pastInvest' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Past Investments
          </button>
        </div>
        {tabination === 'currentInvest' &&
          <CurrentInvestment deviceType={deviceType} portfolio={portfolio.filter(e => e.current === true)} />
        }
        {tabination === 'pastInvest' &&
          <PastInvestment deviceType={deviceType} portfolio={portfolio.filter(e => e.current !== true)} />
        }
      </div>
    </div >
  );
};

export default Portfolio;
