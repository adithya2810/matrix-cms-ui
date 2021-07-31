import React from "react";
import HomeContent from "./homeContent";
import HomeCarousal from "./homeCarousal";
import HomeFounder from "./homeFounder";

type propType = {
  deviceType: {
    mobile: boolean;
  }
}

const Home: React.FC<propType> = ({ deviceType }) => {
  return (
    <div className="bg-secondary-light">
      <HomeFounder mobile={deviceType?.mobile} />
      <HomeCarousal mobile={deviceType?.mobile} />
      <div className="SectionTitleOuter">
        <div className="page-center">
          <div className="SectionTitleInner">
            <h4 className="font-extralight text-primary-dark sm:font-normal" style={deviceType?.mobile ? { fontSize: 26 } : {}}>
              {deviceType?.mobile ?
                <>
                  {" "}
                  Scroll through for the<br />latest from the{" "}
                  <span className="text-accent">Matrix<br />Moments </span> series.{" "}
                </>
                : <>
                  {" "}
                  Scroll through for the latest from <br /> the{" "}
                  <span className="text-accent">Matrix Moments </span> series.{" "}
                </>
              }
            </h4>
          </div>
        </div>
      </div>
      <HomeContent mobile={deviceType?.mobile} />
    </div>
  );
};

export default Home;
