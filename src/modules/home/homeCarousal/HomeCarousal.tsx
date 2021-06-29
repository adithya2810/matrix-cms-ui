import React, { useState, useEffect } from 'react';
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
    title: "Tech-enabled <span>Student housing</span> Platform",
    founderImage: '/icons/founder3-edited.png',
    name: ["ANINYA", "DUTTA"],
    background_url: "/icons/backgroundCarousalImage.png"
  },
  {
    id: "02",
    title: "Tech-enabled <span>Student housing</span> Platform",
    founderImage: '/icons/rohit-edited.png',
    name: ["ROHIT.", " M.A"],
    background_url: "/icons/jonathan-borba.png"
  },
  {
    id: "03",
    title: "Tech-enabled <span>Student housing</span> Platform",
    founderImage: '/icons/founder4-edited.png',
    name: ["Mr. ", "LAKSHIPATHY"],
    background_url: "/icons/floriane-vita.png"
  }
]

const HomeCarousal = () => {

  const [featureData, setFeatureData] = useState([]);

  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );

  useEffect(() => {
    componentDidMount();
  }, [])

  const componentDidMount = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?FeaturedOne=1');
    const json = await response.json();

    const featureTwoData = json.map(blogData => {
      return {
        image_url: blogData.cover_desktop,
        title: blogData.name,
        author: blogData.author[0].name,
        content_id: blogData.content_type.id,
        content_type: blogData.content_type.name,
        read_duration: blogData.readtime,
      }
    })
    setFeatureData(featureTwoData)
  }


  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite: true,
    fade: true,
    pauseOnHover: false,
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
    <div className="relative blogSliderOuter heroSlider02Outer">
      <Slider {...settings}>
        {heroSlider02_Data.map(slider => {
          return (
            <div key={slider.id}>
              <div
                className="h-full w-full flex flex-col imageOverlay relative"
                style={{
                  backgroundImage: `url(${slider.background_url})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="page-center">
                  <div className="heroSlider02-outerWarp">
                    <div className="heroSlider02-contentSection" style={{ flex: "0 45%" }}>
                      <div className="heroSlider02-slide-indicator desktop">
                        {" "}
                        {slider.id}/05
                      </div>
                      <div className="text-secondary-light heroSlider02-slide-title" dangerouslySetInnerHTML={{ __html: slider.title }}>
                      </div>
                    </div>
                    <FounderDetail
                      names={slider.name}
                      background_url={slider.founderImage}
                    />
                    <div className="heroSlider02-slide-indicator mobile">
                      {" "}
                      {slider.id}/05
                    </div>
                  </div>
                </div>
              </div>
            </div>)
        })}
      </Slider>

      <div
        className="absolute bg-accent hospatalitySector">
        <span className="text-secondary hospatalitySector-text font-medium text-lg leading-6 text-center h-full flex justify-center items-center"
        >
          {" "}
          Hospitality Sector{" "}
        </span>
      </div>
      <ContentSlider
        contentList={featureData}
        className="absolute md:relative bottom-0 right-0 text-primary-dark  contentItemOuter-w85"
        header={<span>Dive into the <span className="text-accent">Matrix Moments</span> series</span>}
      />
    </div>
  );
};

export default HomeCarousal;
