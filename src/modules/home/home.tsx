import React from "react";
import HomeContent from "./homeContent";
import HomeCarousal from "./homeCarousal";
import HomeFounder from "./homeFounder";

const Home: React.FC = () => {
  return (
    <div className="bg-secondary-light">
      <HomeFounder />
      <HomeCarousal />
      <div className="SectionTitleOuter" style={{ marginTop: 60, marginBottom: 80, }}>
        <div className="page-center">
          <div className="SectionTitleInner">
            <h4 className="font-extralight text-primary-dark"
              style={{ fontSize: 75, lineHeight: "80px", }}>
              {" "}
              Scroll through for the latest from <br /> the{" "}
              <span className="text-accent">Matrix Moments </span> series ...{" "}
            </h4>
          </div>
        </div>
      </div>
      <HomeContent />
    </div>
  );
};

export default Home;
