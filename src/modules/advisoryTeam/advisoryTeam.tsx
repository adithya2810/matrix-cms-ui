import React, { useState } from "react";
import InvestmentTeam from './investmentTeam';
import PastInvestmentTeam from './pastInvestmentTeam'
import MainBanner from './topBanner/mainBanner';

export type Props = {
  invesmentTeam: any;
  operationsTeam: any;
};

const Home: React.FC<Props> = ({ invesmentTeam, operationsTeam }) => {

  const [tabination, setTabination] = useState('currentTeam');

  return (
    <>
      <MainBanner />

      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('currentTeam')}
            className={tabination === 'currentTeam' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            INVESTMENTS
          </button>
          <button onClick={() => setTabination('pastTeam')}
            className={tabination === 'pastTeam' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            OPERATIONS
          </button>
        </div>

        {tabination === 'currentTeam' &&
          <InvestmentTeam invesmentTeam={invesmentTeam} />
        }
        {tabination === 'pastTeam' &&
          <PastInvestmentTeam operationsTeam={operationsTeam} />
        }
      </div>
    </>
  );
};

export default Home;
