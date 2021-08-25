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
          <CurrentInvestment deviceType={deviceType} portfolio={portfolio} />
        }
        {tabination === 'pastInvest' &&
          <PastInvestment deviceType={deviceType} portfolio={portfolio} />
        }
      </div>
    </div >
  );
};

export default Portfolio;
