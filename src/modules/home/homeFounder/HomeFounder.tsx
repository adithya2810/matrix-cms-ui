import React from "react";
import { Founder } from "@components";
import { relative } from 'path';

const founderData = [
  {
    id: "01",
    name: ["Bhavish", "AGGARWAL"],
    title: "We are <span>founders</span> first",
    background_url: '/icons/Bhavish_image.svg',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "02",
    name: ["ROHIT.", " M.A"],
    title: "We <span>partner</span> closely",
    background_url: '/icons/rohit.jpg',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "03",
    name: ["ANINDYA ", "DUTTA"],
    title: "We <span>invest</span> early",
    background_url: '/icons/founderDetail.jpg',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "04",
    name: ["Asish ", "MOHAPATRA"],
    title: "We <span>partner</span> closely",
    background_url: '/icons/founder4.jpg',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  }
]

const HomeFounder = () => {
  return (
    <div className="pageBannerOuter" style={{ "position": "relative" }}>
      <div className="page-center">
        <div className="heroSlider01-outerWarp">
          <Founder foundersData={founderData} />
        </div>
      </div>
    </div>
  );
};

export default HomeFounder;
