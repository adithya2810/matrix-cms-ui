import React, { useState } from "react";
import InvestmentTeam from './investmentTeam';
import PastInvestmentTeam from './pastInvestmentTeam'
import MainBanner from './topBanner/mainBanner';

const Home: React.FC = () => {

  const [tabination, setTabination] = useState('currentTeam');

  return (
    <>
      <MainBanner />

      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('currentTeam')}
            className={tabination === 'currentTeam' ? "btn-active-bg text-white pt-19p pl-3p py-2 text-3xl  md:text-2xl sm:text-base" : "text-white pt-19p pl-3p py-2 text-3xl  md:text-2xl sm:text-base"}>
            INVESTMENTS
          </button>
          <button onClick={() => setTabination('pastTeam')}
            className={tabination === 'pastTeam' ? "btn-active-bg text-white pt-19p pl-3p py-2 text-3xl  md:text-2xl sm:text-base" : "text-white pt-19p pl-3p py-2 text-3xl  md:text-2xl sm:text-base"}>
            OPERATIONS
          </button>
        </div>

        {tabination === 'currentTeam' &&
          <InvestmentTeam />
        }
        {tabination === 'pastTeam' &&
          <PastInvestmentTeam />
        }
      </div>
    </>
  );
};

export default Home;
