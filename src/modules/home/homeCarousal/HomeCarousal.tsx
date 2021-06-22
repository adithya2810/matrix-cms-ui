import React from "react";
import { Image, ContentSlider } from "@components";
import { FounderDetail } from "@components/founder/FounderDetail";
import Carousel from "react-slick";

const data = [
  {
    image_url: "/icons/content1.svg",
    title: "From both sides of the table : Kunal Bahl unplugged",
    author: "TARUN DAVDA",
    content_id: "abcdef",
    content_type: "blog",
    read_duration: "4 MIN",
  },
  {
    image_url: "/icons/content1.svg",
    title: "From both sides of the table : Kunal Bahl unplugged",
    author: "TARUN DAVDA",
    content_id: "abcdefg",
    content_type: "blog",
    read_duration: "4 MIN",
  },

];

const heros = [{
  firstName: 'ROHIT',
  lastName: 'M.A.',
  firstName1: null,
  lastName1: null,
  caption: 'At Cloudnine, we believe that a child is life’s greatest gift and pregnancy is one of the most magical experiences nature can offer. ',
  logo: '/icons/Cloudnine.svg',
  image: '/icons/Rohit_Treatment.svg',
  heading: ['Leading chain of ', 'maternity hospitals', ''],
  bg: ''
}, {
  firstName: 'ANINDYA',
  lastName: 'DUTTA',
  firstName1: 'SANDEEP',
  lastName1: 'DALMIA',
  caption: 'Stanza Living provides fully-managed shared living accommodations to students and young professionals.',
  logo: '/icons/Stanza.svg',
  image: '/icons/Anindya.svg',
  heading: ['Tech-enabled ', 'student housing', 'platform'],
  bg: ''
}, {
  firstName: 'Asish',
  lastName: 'MOHAPATRA',
  firstName1: null,
  lastName1: null,
  caption: 'OFB Tech (OfBusiness) is a tech-enabled platform that facilitates raw material procurement and credit for SMEs,',
  logo: '/icons/OfBusiness.svg',
  image: '/icons/Asish.svg',
  heading: ['SME', 'lending', '']
}, {
  firstName: 'Mr.',
  lastName: 'LAKSHIPATHY',
  firstName1: null,
  lastName1: null,
  caption: 'A specialized financial services company funding the people who were perceived to be unfundable',
  logo: '/icons/mx.svg',
  image: '/icons/Laxmipathy.svg',
  heading: ['Credit led', 'B2B marketplace', '']
}, {
  firstName: 'CHAKRADHAR',
  lastName: 'GADE',
  firstName1: 'NITIN',
  lastName1: 'KAUSHAL',
  caption: 'Country Delight aims to bring back the basics of Milk. It promises natural, fresh and unadulterated milk directly to the doorstep of the consumer.',
  logo: '/icons/Country.svg',
  heading: ['D2C', 'dairy & fresh foods', 'brand'],
  image: '/icons/Chakradhar.svg'
}, {
  firstName: 'Bhavish',
  lastName: 'AGGARWAL',
  firstName1: null,
  lastName1: null,
  caption: 'Ola is India’s largest mobility platform and one of the world’s largest ride-hailing companies, serving 250+ cities across India, Australia, New Zealand, and the UK.',
  logo: '/icons/ola.svg',
  image: '/icons/Bhavish_image.svg',
  heading: ['India’s leading', 'mobility', 'player']
},]

const HomeCarousal = () => {
  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );
  return (
    // <Carousel>
    <div className="relative" style={{ height: 1080 }}>
      <div
        className="absolute h-full w-full flex flex-col"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex">
          <Image
            src="/icons/leftArrow.svg"
            alt={"right Icon"}
            height={73}
            width={37}
            style={{ marginLeft: 179 }}
          />
          <div style={{ width: 533, marginLeft: 100 }}>
            <div
              style={{
                fontWeight: 300,
                fontSize: "100px",
                lineHeight: "120px",
                letterSpacing: "-0.01em",
                opacity: 0.35,
                marginTop: 117,
              }}
            >
              {" "}
              01/05
            </div>
            <div
              className="text-secondary-light"
              style={{
                fontWeight: 200,
                fontSize: "85px",
                lineHeight: "95px",
                opacity: 1,
                marginTop: 151,
                minWidth: 545,
              }}
            >
              Tech-enabled
              <br />
              <span className="font-bold"> Student housing</span> <br />
              Platform
            </div>
          </div>
          <FounderDetail style={{ marginTop: 36, marginLeft: 103 }} />
          <Image
            src="/icons/rightArrow.large.svg"
            alt={"right Icon"}
            height={73}
            width={37}
            style={{ marginLeft: 103 }}
          />
        </div>
        <div
          className="absolute bg-accent"
          style={{ bottom: 33, left: 269, height: 246, width: 564 }}
        >
          <span
            className="text-secondary font-medium text-lg leading-6 text-center h-full flex justify-center items-center"
            style={{ writingMode: "vertical-lr", width: 56 }}
          >
            {" "}
            Hospitality Sector{" "}
          </span>
        </div>
        <ContentSlider
          style={{
            left: 325,
            background: "#EBEBE9",
            border: "1px solid #EBEBE9",
            boxSizing: "border-box",
            fontSize: 28,
            lineHeight: "34px",
            paddingTop: 24,
            paddingLeft: 34,
          }}
          contentList={data}
          className="absolute bottom-0 right-0 text-primary-dark"
          header={<span>Dive into the <span className="text-accent">Matrix Moments</span> series</span>}
        />
      </div>

    </div>
    // </Carousel>
  );
};

export default HomeCarousal;
