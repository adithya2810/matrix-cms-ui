import React, { useState } from 'react';
import { Image, ContentSlider } from "@components";
import { FounderDetail } from "@components/founder/FounderDetail";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const data = [
//   {
//     image_url: "/icons/content1.svg",
//     title: "From both sides of the table : Kunal Bahl unplugged",
//     author: "TARUN DAVDA",
//     content_id: "abcdef",
//     content_type: "blog",
//     read_duration: "4 MIN",
//   },
//   {
//     image_url: "/icons/content1.svg",
//     title: "From both sides of the table : Kunal Bahl unplugged",
//     author: "TARUN DAVDA",
//     content_id: "abcdefg",
//     content_type: "blog",
//     read_duration: "4 MIN",
//   },
//   {
//     image_url: "/icons/content1.svg",
//     title: "From both sides of the table : Kunal Bahl unplugged",
//     author: "TARUN DAVDA",
//     content_id: "abcdef",
//     content_type: "blog",
//     read_duration: "4 MIN",
//   },
//   {
//     image_url: "/icons/content1.svg",
//     title: "From both sides of the table : Kunal Bahl unplugged",
//     author: "TARUN DAVDA",
//     content_id: "abcdefg",
//     content_type: "blog",
//     read_duration: "4 MIN",
//   },
//   {
//     image_url: "/icons/content1.svg",
//     title: "From both sides of the table : Kunal Bahl unplugged",
//     author: "TARUN DAVDA",
//     content_id: "abcdef",
//     content_type: "blog",
//     read_duration: "4 MIN",
//   },
// ];


const heroSlider02_Data = [
  {
    id: "01",
    title: "Tech-enabled Student housing Platform",
    founderImage: '/icons/founderDetail.jpg',
    name: ["ANINYA", "DUTTA"],
    background_url: "/icons/backgroundCarousalImage.png"
  },
  {
    id: "02",
    title: "Tech-enabled Student housing Platform",
    founderImage: '/icons/rohit.jpg',
    name: ["ROHIT.", " M.A"],
    background_url: "/icons/jonathan-borba.png"
  },
  {
    id: "03",
    title: "Tech-enabled Student housing Platform",
    founderImage: '/icons/founder4.jpg',
    name: ["Mr. ", "LAKSHIPATHY"],
    background_url: "/icons/floriane-vita.png"
  }
]

const HomeCarousal = () => {

  const [featureData, setFeatureData] = useState([]);

  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );

  const componentDidMount = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?FeaturedOne=1');
    const json = await response.json();

    const featureTwoData = json.map(blogData => {
      return {
        image_url: "/icons/content1.svg",
        title: blogData.name,
        author: blogData.author[0].name,
        content_id: blogData.content_type.id,
        content_type: blogData.content_type.name,
        read_duration: blogData.readtime,
      }
    })
    setFeatureData(featureTwoData)
  }

  componentDidMount();

  var settings = {
    dots: false,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <Image
          src="/icons/rightArrow.large.svg"
          alt={"right Icon"}
          height={73}
          width={37}
          style={{ maxWidth: 50 }}
        />
      </div>
    ),
    prevArrow: (
      <div>
        <Image
          src="/icons/leftArrow.svg"
          alt={"right Icon"}
          height={73}
          width={37}
          style={{ maxWidth: 50 }}
        />
      </div>
    )

  };

  return (
    <div className="relative heroSlider02Outer" style={{ height: 900 }}>
      <Slider {...settings}>
        {heroSlider02_Data.map(slider => {
          return (
            <div>
              <div key={slider.id}
                className="h-full w-full flex flex-col imageOverlay relative"
                style={{
                  backgroundImage: `url(${slider.background_url})`,
                  backgroundSize: "cover",
                  height: 900
                }}
              >
                <div className="page-center">
                  <div className="heroSlider02-outerWarp">
                    <div className="heroSlider02-contentSection" style={{ flex: "0 45%" }}>
                      <div
                        style={{
                          fontWeight: 300,
                          fontSize: "80px",
                          lineHeight: "120px",
                          letterSpacing: "-0.01em",
                          opacity: 0.35,
                          marginTop: 50,
                        }}
                      >
                        {" "}
                        {slider.id}/05
                      </div>
                      <div
                        className="text-secondary-light"
                        style={{
                          fontWeight: 500,
                          fontSize: "60px",
                          lineHeight: "70px",
                          opacity: 1,
                          marginTop: 50,
                        }}
                      >
                        {slider.title}
                        {/* Tech-enabled
                <br />
                <span className="font-bold"> Student housing</span> <br />
                Platform */}
                      </div>
                    </div>
                    <FounderDetail
                      names={slider.name}
                      background_url={slider.founderImage}
                      style={{
                        marginTop: 30, flex: "0 45%", position: "relative",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>)
        })}
      </Slider>

      <div
        className="absolute bg-accent"
        style={{ bottom: 40, left: 150, height: 246, width: 564 }}
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
          left: 200,
          background: "#EBEBE9",
          border: "1px solid #EBEBE9",
          boxSizing: "border-box",
          fontSize: 28,
          lineHeight: "34px",
          paddingTop: 24,
          paddingLeft: 34,
        }}
        contentList={featureData}
        className="absolute bottom-0 right-0 text-primary-dark"
        header={<span>Dive into the <span className="text-accent">Matrix Moments</span> series</span>}
      />
    </div>
  );
};

export default HomeCarousal;
