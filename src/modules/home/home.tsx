import React from "react";
import HomeContent from "./homeContent";
import HomeCarousal from "./homeCarousal";
import HomeFounder from "./homeFounder";

const Home: React.FC = () => {
  return (
    <div className="bg-secondary-light">
      <HomeFounder/> 
      <HomeCarousal />
      <h4
        className="font-extralight text-primary-dark"
        style={{
          marginTop: 119,
          marginLeft: 116,
          marginBottom: 120,
          fontSize: 85,
          lineHeight: "95px",
        }}
      >
        {" "}
        Scroll through for the latest from <br /> the{" "}
        <span className="text-accent">Matrix Moments </span> series ...{" "}
      </h4>
      <HomeContent />
    </div>
  );
};

export default Home;
