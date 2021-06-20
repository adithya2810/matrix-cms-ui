import React, { useState } from "react";
import PortfolioHero from './portfolioHero';
import PastInvestment from './pastInvestment';
import CurrentInvestment from './currentInvestment';

const Portfolio: React.FC = () => {
  const [tabination, setTabination] = useState('currentInvest');
  return (
    <div>
      <PortfolioHero />
      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('currentInvest')}
            className={tabination === 'currentInvest' ? "btn-active-bg text-white pt-19p pl-3p py-2 text-3xl md:text-2xl sm:text-base" : "text-white pt-19p pl-3p py-2 text-3xl md:text-2xl sm:text-base"}>
            CURRENT INVESTMENTS
          </button>
          <button onClick={() => setTabination('pastInvest')}
            className={tabination === 'pastInvest' ? "btn-active-bg text-white pt-19p pl-3p py-2 text-3xl md:text-2xl sm:text-base" : "text-white pt-19p pl-3p py-2 text-3xl md:text-2xl sm:text-base"}>
            PAST INVESTMENT
          </button>
        </div>
        {tabination === 'currentInvest' &&
          <CurrentInvestment />
        }
        {tabination === 'pastInvest' &&
          <PastInvestment />
        }
      </div>
    </div>
  );
};

export default Portfolio;
