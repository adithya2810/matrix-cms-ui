import React, { useState, useEffect, ReactComponentElement } from 'react';
import { Image, ContentSlider } from "@components";
import Slider from "react-slick";
import qs from "qs";
import _ from "lodash";

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

const feature_blogs = [
  "60f55ea43e54f918dc97b3b0", //ola
  "61154f5e7acdcae02c64ddc1", //Cloudnine
  "6115fd037acdcae02c64dde0", //Stanza
  "611606d37acdcae02c64ddf2", //OfBusiness
  "611547307acdcae02c64ddaf", //Dealshare
  "611557237acdcae02c64ddcc", //onecard
  "611608a67acdcae02c64ddf5", //razorpay
  "611522037acdcae02c64dda8", //mswipe
  "611548d47acdcae02c64ddb3", //dailyhunt
  "611521947acdcae02c64dda7", //five-star
  "611604bc7acdcae02c64ddef", //Country Delight
];

export const Founder: React.FC<{ foundersData: Array<any>, mobile: boolean }> = (props) => {

  const [featureData, setFeatureData] = useState([]);
  const [timerClass, setTimerClass] = useState('timerWarp0');

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = async () => {
    const psqury = { _where: { _id_in: feature_blogs, FeaturedOne: 1 } };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?${qs.stringify(psqury)}`);
    const json = await response.json();
    const featureOneData = json.map(blogData => {
      //console.log(json)
      return {
        image_url: blogData.cover_desktop,
        title: blogData.name,
        author: blogData.author[0]?.name || "",
        content_id: blogData.id || "",
        content_type: blogData.content_type.name || "Video",
        read_duration: blogData.readtime,
        blog_url: blogData.slug,
        order: _.indexOf(feature_blogs, blogData._id)
      }
    });

    setFeatureData(_.sortBy(featureOneData, ["order"]));
  }


  const settingsMain = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (state) => afterChangeHandler(state)
  };


  function afterChangeHandler(currentSlide) {
    setTimerClass(`timerWarp${currentSlide}`);
    goTo(currentSlide);
  }

  function goTo(index) {
  }

  function getNumberfounder(data, i) {
    let fi = 0;

    let list = [];
    for (let index = 0; index < data.length; index++) {
      const founder = data[index];
      // if (i != index) {
      list.push(<div className={`heroSlider01-thumbnailInner heroTitleSlider`} key={founder.index + '-' + i} style={props.mobile ? { minWidth: 115, color: '#01576e' } : { color: '#01576e' }}>
        <span className="thumbnailIndex" style={props.mobile ? { fontWeight: 500, fontSize: 11, lineHeight: '14px', paddingRight: 2, marginTop: -3, color: '#01576e' } : { fontWeight: 400, fontSize: 12, lineHeight: '14px' }}>{/*`0${founder.index}`*/}</span>
        <div className="heroSlider01-thumbnailText" style={{ fontWeight: 400, fontSize: 16, color: props.mobile ? 'rgb(0 0 0 / 65%)' : '#01576e', maxWidth: 110 }} dangerouslySetInnerHTML={{ __html: founder.title }}></div>
      </div>);
      //   fi++;
      // }
    }
    return list;
  }
  return (
    <React.Fragment>
      <Slider {...settingsMain}>
        {props.foundersData.map((founder, index) => {
          return (
            <div key={founder.id}>
              <div className="page-center">
                <div className="founderSection-outerWarp">
                  <div className={`founderSection-leftOuter founder-container`}>
                    <div className="founder-background" style={{ height: '95%', width: '95%' }}></div>
                    <div className="founder-content">
                      <div className="founder-coverImage" style={props.mobile ? { minHeight: '40vh', backgroundImage: `url(${founder.background_url})` } : { backgroundImage: `url(${founder.background_url})` }}></div>

                      <div className="founder-footer-container relative" style={props.mobile ? { paddingRight: 0 } : {}}>
                        <svg className="absolute founderRectangle" width={`${props.mobile ? '27' : '56.167'}`} height={`${props.mobile ? '27' : '56'}`} viewBox="0 0 56.167 56" style={props.mobile ? { top: -45, left: 15 } : {}}>
                          <g transform="translate(0.167)">
                            <rect id="Rectangle_1113" data-name="Rectangle 1113" width="50" height="50" transform="translate(3 3)" fill="none" stroke="#fbf9f5" strokeWidth="6" opacity="0.3" />
                            <path id="Path_672" data-name="Path 672" d="M2.833,3H53V53H2.833V4.269" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="6" />
                          </g>
                        </svg>
                        <div className="founder-name-container" style={props.mobile ? { padding: '13px 5px', minHeight: 'auto', textAlign: 'left', paddingLeft: 10 } : { minHeight: 100 }}>
                          {founder.name.map(name => {
                            return <h6 className="founder-name-text" key={name.firstName + 1} style={props.mobile ? { fontWeight: 300, fontSize: 20, lineHeight: '24px' } : { fontWeight: 300, fontSize: 32, lineHeight: '36px', letterSpacing: '5%' }}>
                              <strong>{name.firstName} </strong> {name.lastName}
                            </h6>
                          })}

                        </div>
                        <div className="founder-field-container" style={props.mobile ? { height: 'auto' } : { height: 65 }}>
                          <div>
                            {founder.tags.map((tag, index1) => {
                              return <React.Fragment key={index1}>
                                {index1 > 0 && <span className="tagBorderRight" style={props.mobile ? { margin: '6px 0px', height: 1 } : {}}></span>}
                                <span className="text-secondary font-medium text-lg leading-6 tags" key={tag} style={props.mobile ? { fontWeight: 500, fontSize: 14, lineHeight: '18px' } : { fontWeight: 500, fontSize: 18, lineHeight: '24px' }}> {tag}</span>
                              </React.Fragment>
                            })}
                          </div>
                          <Image src={founder.logo} alt={"ola"} style={props.mobile ? { maxWidth: 78, height: 27 } : { maxWidth: 120, height: 39 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`founderSection-rightOuter heroSlide${(index == 8) ? '5' : (index + 1)} sm:mt-10`}>
                    <h1 className="founderTitle" style={props.mobile ? { fontSize: '4rem', fontWeight: 300, lineHeight: 0.9 } : { letterSpacing: 1.5 }} dangerouslySetInnerHTML={{ __html: founder.title }}></h1>
                    <div className="founderTitleSliderBox" style={{ justifyContent: 'flex-start', bottom: props.mobile ? '-5px' : '-20px' }}>
                      {getNumberfounder(founder.small_titles, index)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="timerOuter">
                <div className="timmerInner"></div>
              </div>
            </div>
          )
        })}
      </Slider>

      <ContentSlider
        style={{
          right: 0,
        }}
        slidesToShow={1.5}
        contentList={featureData}
        className={`blogSliderOuter absolute md:relative md:my-8 bottom-0 right-0 text-primary-dark contentItemOuter-w50 ${timerClass}`}
        header={<span style={props.mobile ? { fontSize: 19, display: 'block', paddingRight: '30%' } : { fontWeight: 400 }}>{props.mobile} Insights from market  <span className="text-accent">disruptors & investors</span> </span>}
        mobile={props.mobile}
      />
    </React.Fragment>
  );
};
