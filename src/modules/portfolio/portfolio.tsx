import React, { useState } from "react";
import PortfolioHero from './portfolioHero';
import PastInvestment from './pastInvestment';
import CurrentInvestment from './currentInvestment';

export type Props = {
  portfolio: any;
  deviceType: {
    mobile: boolean
  }
};

const Portfolio: React.FC<Props> = ({ portfolio, deviceType }) => {
  const [tabination, setTabination] = useState('currentInvest');
  return (
    <div>
      <PortfolioHero deviceType={deviceType} />
      <div className="relative">
        <div className="content-center m-auto tabination" style={deviceType.mobile ? {} : { top: '-4.3rem' }}>
          <button onClick={() => setTabination('currentInvest')}
            style={deviceType.mobile ? { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={tabination === 'currentInvest' ? "btn-active-bg text-white tab-btn sm:px-2 px-8 py-3 sm:py-1 text-3md sm:text-sm md:text-xl focus:outline-none" : "focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-3 sm:py-1 text-3md md:text-2xl"}>
            CURRENT INVESTMENTS
          </button>
          <button onClick={() => setTabination('pastInvest')}
            style={deviceType.mobile ? { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={tabination === 'pastInvest' ? "btn-active-bg text-white tab-btn sm:px-2 px-8 py-3 sm:py-1 text-3md sm:text-sm md:text-xl focus:outline-none" : "focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-3 sm:py-1 text-3md md:text-2xl"}>
            PAST INVESTMENT
          </button>
        </div>
        {tabination === 'currentInvest' &&
          <CurrentInvestment portfolio={portfolio} />
        }
        {tabination === 'pastInvest' &&
          <PastInvestment portfolio={portfolio} />
        }
      </div>
    </div >
  );
};

export default Portfolio;
