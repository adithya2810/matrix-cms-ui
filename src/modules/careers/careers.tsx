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
          <button onClick={() => setTabination('porfolioCompanies')} style={deviceType.mobile ? { fontSize: 13, paddingBottom: 9 } : {}}
            className={tabination === 'porfolioCompanies' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Porfolio Companies
          </button>
          <button onClick={() => setTabination('matrixPartners')} style={deviceType.mobile ? { fontSize: 13, paddingBottom: 9 } : {}}
            className={tabination === 'matrixPartners' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Matrix Partners India
          </button>
        </div>

        {tabination === 'porfolioCompanies' &&
          <PorfolioCompanies mobile={deviceType.mobile} />
        }
        {tabination === 'matrixPartners' &&
          <div className="grid grid-cols-7 pt-20 mx-20 sm:mx-0 sm:pt-10 sm:px-10">
            <h2 className="col-span-full pb-16 text-center font-normal text-8xl sm:font-medium sm:text-4xl" style={{ color: '#01576E' }}>No current openings</h2>
          </div>
        }

      </div>
    </>
  );
};

export default Home;

