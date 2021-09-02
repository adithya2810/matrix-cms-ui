import React, { useState } from "react";
import InvestmentTeam from './investmentTeam';
import PastInvestmentTeam from './pastInvestmentTeam'
import MainBanner from './topBanner/mainBanner';

export type Props = {
  invesmentTeam: any;
  operationsTeam: any;
  deviceType: {
    mobile: boolean;
  }
};

const Home: React.FC<Props> = ({ invesmentTeam, operationsTeam, deviceType }) => {

  const [tabination, setTabination] = useState('currentTeam');

  const investmentBanner = "../../../../img/advisory-banner.png";
  const operationsBanner = "../../../../img/advisory-banner1.jpg";

  return (
    <>
      {/* <MainBanner
        banner={tabination === 'currentTeam' ? investmentBanner : operationsBanner}
        mobile={deviceType.mobile}
      /> */}

      <div className="sm:hidden w-full bg-cover bg-center bg-accent relative" style={{ boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 40%)', backgroundSize: '100% 100%', height: '25rem' }}>
        <div className="flex border-b-4 border-accent border-solid items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h4 className="text-white text-6xl md:leading-10 font-bold xl:text-4xl sm:text-2xl">We are company builders first.</h4>
            <p className="text-white sub-h1 md:text-xl">Our experience supports and amplifies companies over their lifespan</p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block hidden w-full bg-cover bg-center bg-accent relative c-bg" style={deviceType.mobile ? { height: 365 } : {}}>
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="p-8">
            <h1 className="text-white leading-tight text-5sm font-medium sm:text-left" style={deviceType.mobile ? { fontSize: 35, lineHeight: '40px' } : {}}>We are company builders first.</h1>
            <p className="text-white text-xl sm:text-left sm:font-medium sm:pt-2" style={deviceType.mobile ? { fontSize: 18, lineHeight: '20px', letterSpacing: 0.25 } : {}}>Our experience supports and amplifies companies over their lifespan</p>
            <div className="flex w-full relative position-bottom">
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('currentTeam')} style={(deviceType.mobile && tabination === 'currentTeam') ? { backgroundColor: '#003d4d' } : {}}
            className={tabination === 'currentTeam' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Investment
          </button>
          <button onClick={() => setTabination('pastTeam')} style={(deviceType.mobile && tabination === 'pastTeam') ? { backgroundColor: '#003d4d' } : {}}
            className={tabination === 'pastTeam' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Operations
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
