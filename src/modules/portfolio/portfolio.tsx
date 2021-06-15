import React from "react";
import PortfolioHero from './portfolioHero';
import PastInvestment from './pastInvestment';
import CurrentInvestment from './currentInvestment';

const Portfolio: React.FC = () => {
  return (
    <div>
      <PortfolioHero />
      <PastInvestment />
      <CurrentInvestment />
    </div>
  );
};

export default Portfolio;
