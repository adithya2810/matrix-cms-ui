import React from "react";
import { Founder } from "@components";
import { relative } from 'path';

const founderData = [
  {
    id: "01",
    name: ["Bhavish", "AGGARWAL"],
    title: "We are <span>founders</span><br> first",
    background_url: '/icons/Bhavish_image.png',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "02",
    name: ["ROHIT.", " M.A"],
    title: "We <span>partner</span><br> closely",
    background_url: '/icons/rohit-edited.png',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "03",
    name: ["ANINDYA ", "DUTTA"],
    title: "We <span>invest</span><br> early",
    background_url: '/icons/founder3-edited.png',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "04",
    name: ["Asish ", "MOHAPATRA"],
    title: "We <span>partner</span><br> closely",
    background_url: '/icons/founder4-edited.png',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  }
]

const HomeFounder = () => {
  return (
    <div className="pageBannerOuter" style={{ position: "relative", paddingTop: 110 }}>
      <div className="page-center">
        <div className="heroSlider01-outerWarp">
          <Founder foundersData={founderData} />
        </div>
      </div>
    </div>
  );
};

export default HomeFounder;
