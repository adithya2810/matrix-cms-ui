import React from "react";
import { Founder } from "@components";
import { relative } from 'path';

const founderData = [
  {
    id: "01",
    name: [
      {
        firstName: "BHAVISH",
        lastName: "AGGARWAL"
      }
    ],
    title: "We are <br><span>founders</span><br> first",
    background_url: '/icons/Bhavish_image.png',
    tags: ["Mobility", "Electric Cars"],
    logo: "/icons/ola.svg",
  },
  {
    id: "02",
    name: [
      {
        firstName: "ROHIT",
        lastName: " M.A."
      }
    ],
    title: "We <span>partner</span><br> closely",
    background_url: '/icons/rohit-edited.png',
    tags: ["Healthcare"],
    logo: "/icons/Cloudninelogo.svg",
  },
  {
    id: "03",
    name: [
      {
        firstName: "ANINDYA ",
        lastName: "DUTTA"
      },
      {
        firstName: "SANDEEP  ",
        lastName: "DALMIA"
      }
    ],
    title: "We <span>invest</span><br> early",
    background_url: '/icons/founder3-edited.png',
    tags: ["Student Housing Platform"],
    logo: "/icons/Stanza_Living_Logo_3x_W 1.svg",
  },
  {
    id: "04",
    name: [
      {
        firstName: "ASISH ",
        lastName: "MOHAPATRA"
      }
    ],
    title: "We <span>commit </span><br> personally",
    background_url: '/icons/Asish_Treatment.png',
    tags: ["Fintech", "SME Lending"],
    logo: "/icons/OfBusiness Logo 1.svg",
  },
  {
    id: "05",
    name: [
      {
        firstName: "Mr.  ",
        lastName: "LAKSHIPATHY"
      }
    ],
    title: "We are <br><span>founders</span><br> first",
    background_url: '/icons/founder4-edited.png',
    tags: ["Fintech", "NBFC"],
    logo: "/icons/mx-logos-five-star 1.svg",
  },
  {
    id: "06",
    name: [
      {
        firstName: "CHAKRADHAR ",
        lastName: "GADE"
      },
      {
        firstName: "NITIN ",
        lastName: "KAUSHAL"
      }
    ],
    title: "We <span>commit </span><br> personally",
    background_url: '/icons/Chakradhar_Nitin.png',
    tags: ["D2C", "Food"],
    logo: "/icons/Country Delight 1.svg",
  }
]

const HomeFounder = () => {
  return (
    <div className="pageBannerOuter" style={{ position: "relative" }}>
      <div className="page-center">
        <div className="heroSlider01-outerWarp">
          <Founder foundersData={founderData} />
        </div>
      </div>
    </div>
  );
};

export default HomeFounder;
