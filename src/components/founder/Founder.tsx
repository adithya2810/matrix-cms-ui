import React, { useState, useEffect, ReactComponentElement } from 'react';
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
        image_url: blogData.cover_desktop,
        title: blogData.name,
        author: blogData.author[0].name,
        content_id: blogData.id || "",
        content_type: blogData.type || "Video",
        read_duration: blogData.readtime,
        blog_url: blogData.slug
      }
    })
    setFeatureData(featureOneData);
  }


  const settingsMain = {
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    asNavFor: '.slider-nav',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (state) => afterChangeHandler(state)
  };

  const settingsThumbs = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: false,
    pauseOnHover: false,
    asNavFor: '.slider-for',
    speed: 1000,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.35,
          slidesToScroll: 1,
          infinite: false,
          loop: true
        }
      }
    ]
    //afterChange: (state) => afterChangeHandler(state)
  };

  function afterChangeHandler(currentSlide) {
    // console.log(currentSlide);
    goTo(currentSlide);
  }

  function goTo(index) {
  }



  return (
    <React.Fragment>
      <Slider {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}>
        {props.foundersData.map((founder, index) => {
          return <div className="founderSection-outerWarp" key={founder.id}>
            <div className={`founderSection-leftOuter founder-container`}>
              <div className="founder-background"></div>
              <div className="founder-content">
                <div className="founder-coverImage" style={{ backgroundImage: `url(${founder.background_url})` }}></div>

                <div className="founder-footer-container relative">
                  <svg className="absolute founderRectangle" width="56.167" height="56" viewBox="0 0 56.167 56">
                    <g transform="translate(0.167)">
                      <rect id="Rectangle_1113" data-name="Rectangle 1113" width="50" height="50" transform="translate(3 3)" fill="none" stroke="#fbf9f5" stroke-width="6" opacity="0.3" />
                      <path id="Path_672" data-name="Path 672" d="M2.833,3H53V53H2.833V4.269" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="6" />
                    </g>
                  </svg>
                  <div className="founder-name-container">
                    {founder.name.map(name => {
                      return <h6 className="founder-name-text" key={name.firstName + 1}>
                        <strong>{name.firstName} </strong> {name.lastName}
                      </h6>
                    })}

                  </div>
                  <div className="founder-field-container" style={{ height: 88 }}>
                    <div>
                      {founder.tags.map((tag, index) => {
                        return <React.Fragment>
                          {index > 0 && <span className="tagBorderRight"></span>}
                          <span className="text-secondary font-medium text-lg leading-6 tags" key={tag}> {tag}</span>
                        </React.Fragment>
                      })}
                    </div>
                    <Image src={founder.logo} alt={"ola"} style={{ maxWidth: 120 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`founderSection-rightOuter heroSlide${index + 1}`}>
              <h1 className="founderTitle" dangerouslySetInnerHTML={{ __html: founder.title }}></h1>

              <div className="founderTitleSliderBox">
                {props.foundersData.map((founder, indexTitleSlider) => (

                  (index !== indexTitleSlider) &&
                  <div className={`heroSlider01-thumbnailInner heroTitleSlider${indexTitleSlider + 1}`} key={founder.id}>
                    <span className="thumbnailIndex">{founder.id}</span>
                    <div className="heroSlider01-thumbnailText" dangerouslySetInnerHTML={{ __html: founder.title }}></div>
                  </div>

                ))}
              </div>


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
                <div className="heroSlider01-thumbnailText" dangerouslySetInnerHTML={{ __html: founder.title }}></div>
              </div>
            )
          })}
        </Slider>
      </div>

      <ContentSlider
        style={{
          right: 0,
        }}
        setting={{
          dots: true,
          autoplay: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1.1,
                infinite: true,
              }
            }
          ]
        }}
        contentList={featureData}
        className="blogSliderOuter absolute md:relative md:my-8 bottom-0 right-0 text-primary-dark contentItemOuter-w50"
        header={<span>Insights from market  <span className="text-accent">disruptors & investors</span> </span>}
      />
    </React.Fragment>
  );
};
