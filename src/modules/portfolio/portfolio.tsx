import React, { useState } from "react";
import PortfolioHero from './portfolioHero';
import PastInvestment from './pastInvestment';
import CurrentInvestment from './currentInvestment';

export type Props = {
  portfolio: any;
};

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  const [tabination, setTabination] = useState('currentInvest');
  return (
    <div>
      <PortfolioHero />
      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('currentInvest')}
            className={tabination === 'currentInvest' ? "btn-active-bg text-white pt-19p tab-btn sm:px-2 px-8 py-2 text-3md sm:text-sm md:text-xl focus:outline-none" : "focus:outline-none text-white pt-19p px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            CURRENT INVESTMENTS
          </button>
          <button onClick={() => setTabination('pastInvest')}
            className={tabination === 'pastInvest' ? "btn-active-bg text-white pt-19p tab-btn sm:px-2 px-8 py-2 text-3md sm:text-sm md:text-xl focus:outline-none" : "focus:outline-none text-white pt-19p px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            PAST INVESTMENT
          </button>
        </div>
        {tabination === 'currentInvest' &&
          <CurrentInvestment portfolio={portfolio} />
        }
        {tabination === 'pastInvest' &&
          <PastInvestment portfolio={portfolio}/>
        }
      </div>
    </div >
  );
};

export default Portfolio;
