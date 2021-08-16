import MainBanner from './topBanner/mainBanner';
import React, { useState } from "react";
import PorfolioCompanies from './porfolioCompanies/porfolioCompanies';

type propType = {
  deviceType: {
    mobile: boolean;
  }
}

const Home: React.FC<propType> = ({ deviceType }) => {
  const [tabination, setTabination] = useState('porfolioCompanies');
  return (
    <>
      <MainBanner mobile={deviceType.mobile} />
      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination" style={{ top: '-3.8rem' }}>
          <button onClick={() => setTabination('porfolioCompanies')}
            className={tabination === 'porfolioCompanies' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 sm:py-1 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 sm:py-1 text-3md md:text-2xl"}>
            Porfolio Companies
          </button>
          <button onClick={() => setTabination('matrixPartners')}
            className={tabination === 'matrixPartners' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 sm:py-1 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 sm:py-1 text-3md md:text-2xl"}>
            Matrix Partners
          </button>
        </div>

        {tabination === 'porfolioCompanies' &&
          <PorfolioCompanies mobile={deviceType.mobile} />
        }

      </div>
    </>
  );
};

export default Home;

