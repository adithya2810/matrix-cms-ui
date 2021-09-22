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
    tags: ["Mobility", "Electric Vehicles"],
    logo: "/icons/ola.svg",
    small_titles: [{ index: 2, title: "We partner <br> closely" }, { index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }]
  },
  {
    id: "02",
    name: [
      {
        firstName: "ROHIT",
        lastName: " M.A."
      }
    ],
    title: "We <br><span>partner</span><br> closely",
    background_url: '/icons/rohit-edited.png',
    tags: ["Healthcare"],
    logo: "/icons/Cloudninelogo.svg",
    small_titles: [{ index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br>founders first" }]
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
    title: "We <br><span>invest</span><br> early",
    background_url: '/icons/founder3-edited.png',
    tags: ["Student accommodation platform"],
    logo: "/icons/Stanza_Living_Logo_3x_W 1.svg",
    small_titles: [{ index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br> founders first" }, { index: 2, title: "We partner <br> closely" }]
  },
  {
    id: "04",
    name: [
      {
        firstName: "OfBusiness ",
        lastName: "Team"
      }
    ],
    title: "We <br><span>commit </span><br> personally",
    background_url: '/icons/offbuisiness_teams.png',
    tags: ["B2B Commerce", "Fintech"],
    logo: "/icons/OfBusiness.svg",
    small_titles: [{ index: 1, title: "We are <br> founders first" }, { index: 2, title: "We partner <br> closely" }, { index: 3, title: "We invest <br> early" }]
  },
  {
    id: "05",
    name: [
      { firstName: "Sourjyendu ", lastName: "Medda" },
      { firstName: "Vineet ", lastName: "Rao" },
      { firstName: "Sankar ", lastName: "Bora" },
      { firstName: "Rajat ", lastName: "Shikhar" }
    ],
    title: "We are <br><span>founders</span><br> first",
    background_url: '/icons/Sourjyende-Rajat-Vinnet.png',
    tags: ["Social Commerce", "Grocery"],
    logo: "/icons/Dealshare-logo-white.png",
    small_titles: [{ index: 2, title: "We partner <br> closely" }, { index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }]
  },
  {
    id: "06",
    name: [
      { firstName: "Anurag ", lastName: "Sinha" },
      { firstName: "Vibhav ", lastName: "Hathi" },
      { firstName: "Rupesh ", lastName: "Kumar" }
    ],
    title: "We <br><span>partner</span><br> closely",
    background_url: '/icons/onecard-boiss.png',
    tags: ["Fintech", "Neobank"],
    logo: "/icons/onecard-logo.png",
    small_titles: [{ index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br>founders first" }]
  },
  {
    id: "07",
    name: [
      { firstName: "Harshil ", lastName: "Mathur" },
      { firstName: "Shashank ", lastName: "Kumar" }
    ],
    title: "We <br><span>invest</span><br> early",
    background_url: '/icons/razorpay-boss.png',
    tags: ["Fintech", "Payments"],
    logo: "/icons/razorpay-white-logo.png",
    small_titles: [{ index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br> founders first" }, { index: 2, title: "We partner <br> closely" }]
  },
  {
    id: "08",
    name: [
      { firstName: "Manish ", lastName: "Patel" }
    ],
    title: "We <br><span>commit </span><br> personally",
    background_url: '/icons/mswipe-manish-patel.png',
    tags: ["Mobile POS"],
    logo: "/icons/mswipe-white-logo.png",
    small_titles: [{ index: 1, title: "We are <br> founders first" }, { index: 2, title: "We partner <br> closely" }, { index: 3, title: "We invest <br> early" }]
  },
  {
    id: "09",
    name: [
      { firstName: "Umang ", lastName: "Bedi" },
      { firstName: "Virendra ", lastName: "Gupta" }
    ],
    title: "We are <br><span>founders</span><br> first",
    background_url: '/icons/dailyhunt-boss.png',
    tags: ["Mobile local language platform"],
    logo: "/icons/dailyhunt-logo.png",
    small_titles: [{ index: 2, title: "We partner <br> closely" }, { index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }]
  },
  {
    id: "10",
    name: [
      {
        firstName: "Mr.  ",
        lastName: "Lakshmipathy"
      }
    ],
    title: "We <br><span>partner</span><br> closely",
    background_url: '/icons/founder4-edited.png',
    tags: ["Fintech", "NBFC"],
    logo: "/icons/mx-logos-five-star 1.svg",
    small_titles: [{ index: 3, title: "We invest <br> early" }, { index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br>founders first" }]
  },
  {
    id: "11",
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
    title: "We <br><span>invest</span><br> early",
    background_url: '/icons/Chakradhar_Nitin.png',
    tags: ["D2C", "Food"],
    logo: "/icons/Country Delight 1.svg",
    small_titles: [{ index: 4, title: "We commit <br> personally" }, { index: 1, title: "We are <br> founders first" }, { index: 2, title: "We partner <br> closely" }]
  }
]

type propType = {
  mobile: boolean;
}

const HomeFounder: React.FC<propType> = (props) => {
  return (
    <div className="pageBannerOuter" style={{ position: "relative" }}>
      <div className="page-center">
        <div className="heroSlider01-outerWarp">
          <Founder foundersData={founderData} mobile={props.mobile} />
        </div>
      </div>
    </div>
  );
};

export default HomeFounder;
