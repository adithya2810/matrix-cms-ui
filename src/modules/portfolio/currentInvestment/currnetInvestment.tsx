import React from "react";
import { Image } from "@components";

export type Props = {
  portfolio: any;
  deviceType: {
    mobile: boolean;
  }
};

const CurrentInvestment: React.FC<Props> = ({ portfolio }) => {
  const filters = portfolio.filter(v => v.current === true && v.tags)
  return (
    <div className="relative pt-12 sm:pt-5">
      <div className="w-full m-auto">
        <h2 className="text-3md sm:text-xl text-center font-bold text-current">Select Current Investments</h2>
      </div>
      {/* <div className="button-filters">
        <div className="button-filters-text">FIlter By:-</div>
        <div className="button-filters-btn">
          {[1, 2, 3, 4].map((v, i) => <span key={i} className={`${i == 0 ? 'active' : ''}`}>FIlter {v}</span>)}
        </div>
      </div> */}
      <div className="grid grid-cols-4 my-24 ml-5 mr-5 lg:h-96 sm:h-auto mg:grid-cols-3 sm:grid-cols-1 gap-4">

        {portfolio.map((e) => e.current === true && (
          <div className="flex self-center justify-center" key={e._id}>
            <div className="flip-card">
              <div className="flip-card-inner ">
                <div className="flip-card-front">
                  <Image src={e.logo_url} alt={e.name} className="p-20" />
                </div>
                <div className="flip-card-back text-left p-4">
                  <Image src={e.logo_url} alt={e.name} className="sm:hidden md:hidden lg:hidden pb-5" />
                  <div className="text-sm text-black font-medium tablet:text-xs md:text-xs sm:text-base pb-5 mb-2 text-left border-b-2" dangerouslySetInnerHTML={{ __html: e.description }}></div>
                  <a href={e.website_url} target="_blank" className="text-xl tracking-wider font-light text-accent pt-4 uppercase flex">Visit Website <img src='/icons/arrow_b.svg' /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentInvestment;

