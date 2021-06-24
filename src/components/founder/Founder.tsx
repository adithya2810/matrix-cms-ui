import React, { useState, useEffect } from 'react';
import { Image, ContentSlider } from "@components";
import Slider from "react-slick";

// export type Props = {
//   names?: Array<string>;
//   background_url?: string;
//   tags?: Array<string>;
//   logo?: string;
//   className?: string;
//   style?: any;
// };

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
  {
    image_url: "/icons/content1.svg",
    title: "From both sides of the table : Kunal Bahl unplugged",
    author: "TARUN DAVDA",
    content_id: "abcdef",
    content_type: "blog",
    read_duration: "4 MIN",
  },
];

export const Founder: React.FC<{ foundersData: Array<any> }> = (props) => {

  const [featureData, setFeatureData] = useState([]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);

    componentDidMount();


  }, []);

  const componentDidMount = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?FeaturedOne=1');
    const json = await response.json();
    const featureOneData = json.map(blogData => {
      return {
        image_url: "/icons/content1.svg",
        title: blogData.name,
        author: blogData.author[0].name,
        content_id: blogData.content_type.id,
        content_type: blogData.content_type.name,
        read_duration: blogData.readtime,
      }
    })
    setFeatureData(featureOneData)
    console.log(featureData)
  }

  const settingsMain = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    fade: false,
    pauseOnHover: true,
    asNavFor: '.slider-nav',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settingsThumbs = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    fade: false,
    pauseOnHover: false,
    asNavFor: '.slider-for',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };



  return (
    <React.Fragment>
      <Slider {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}>
        {props.foundersData.map((founder) => {
          return <div className="founderSection-outerWarp" key={founder.id}>
            <div className={`founderSection-leftOuter founder-container`}>
              <div className="founder-background"></div>
              <div className="founder-content">
                <Image src={founder.background_url} alt="founder image" style={{ flexGrow: 1 }} />
                <Image src="/icons/rectangle.svg" alt={"reactangle"} className="absolute" style={{ left: 38, bottom: 254 }} />
                <div className="founder-footer-container">
                  <div className="founder-name-container">
                    <h6 className="founder-name-text" >
                      <strong>{founder.name[0]} </strong> {founder.name[1]}
                    </h6>
                  </div>
                  <div className="founder-field-container" style={{ height: 88 }}>
                    <div>
                      {founder.tags.map(tag => {
                        return <span className="text-secondary font-medium text-lg leading-6 tags"> {tag}</span>
                      })}
                    </div>
                    <Image src={founder.logo} alt={"ola"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="founderSection-rightOuter">
              <h1 className="founderTitle">{founder.title}</h1>
            </div>
          </div>
        })}
      </Slider>

      <div className="heroSlider01-thumbnailOuter">
        <Slider {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}>
          {props.foundersData.map((founder, index) => {
            return (
              <div className="heroSlider01-thumbnailInner" key={founder.id}>
                <span className="thumbnailIndex">{founder.id}</span>
                <div className="heroSlider01-thumbnailText">{founder.title}</div>
              </div>
            )
          })}
        </Slider>
      </div>

      <ContentSlider
        style={{
          right: 0,
          background: "#EBEBE9",
          border: "1px solid #EBEBE9",
          boxSizing: "border-box",
          fontSize: 22,
          lineHeight: "24px",
          paddingTop: 20,
          paddingLeft: 30,
          width: "50%"
        }}
        setting={{
          dots: true,
          autoplay: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1
        }}
        contentList={featureData}
        className="absolute bottom-0 right-0 text-primary-dark"
        header={<span>Insights from market  <span className="text-accent">disruptors & investors</span> </span>}
      />
    </React.Fragment>
  );
};
