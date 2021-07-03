import MainBanner from './topBanner/mainBanner';
import React, { useState } from "react";
import PorfolioCompanies from './porfolioCompanies/porfolioCompanies';




const Home: React.FC = () => {

  const [tabination, setTabination] = useState('porfolioCompanies');

  return (
    <>
      <MainBanner />

      <div style={{ position: 'relative' }}>
        <div className="content-center m-auto tabination">
          <button onClick={() => setTabination('porfolioCompanies')}
            className={tabination === 'porfolioCompanies' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Porfolio Companies
          </button>
          <button onClick={() => setTabination('matrixPartners')}
            className={tabination === 'matrixPartners' ?
              "btn-active-bg text-white pt-19p px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "focus:outline-none text-white px-8 pt-19p tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Matrix Partners
          </button>
        </div>

        {tabination === 'porfolioCompanies' &&
          <PorfolioCompanies />
        }

      </div>
    </>
  );
};

export default Home;

