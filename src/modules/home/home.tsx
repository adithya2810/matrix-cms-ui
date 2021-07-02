import React from "react";
import HomeContent from "./homeContent";
import HomeCarousal from "./homeCarousal";
import HomeFounder from "./homeFounder";

const Home: React.FC = () => {
  return (
    <div className="bg-secondary-light">
      <HomeFounder />
      <HomeCarousal />
      <div className="SectionTitleOuter">
        <div className="page-center">
          <div className="SectionTitleInner">
            <h4 className="font-extralight text-primary-dark">
              {" "}
              Scroll through for the latest from <br /> the{" "}
              <span className="text-accent">Matrix Moments </span> series ...{" "}
            </h4>
          </div>
        </div>
      </div>
      <HomeContent />
      <h2>Scroll through for the latest from working</h2>
    </div>
  );
};

export default Home;
