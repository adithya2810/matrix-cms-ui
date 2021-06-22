import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, ContentSlider } from "@components";

export type Props = {
  names?: Array<string>;
  background_url?: string;
  tags?: Array<string>;
  logo?: string;
  className?: string;
  style?: any;
};

export const Founder: React.FC<Props> = ({ className, style = {} }) => {
  const heros = [{
    firstName: 'Bhavish',
    lastName: 'AGGARWAL',
    firstName1: null,
    lastName1: null,
    caption: 'Mobility',
    caption1: 'Electric Cars',
    logo: '/icons/ola.svg',
    image: '/icons/Bhavish_image.svg',
    heading: ['We are', 'founders', 'first']
  }, {
    firstName: 'ROHIT',
    lastName: 'M.A.',
    firstName1: null,
    lastName1: null,
    caption: 'Healthcare',
    caption1: null,
    logo: '/icons/Cloudnine.svg',
    image: '/icons/Rohit_Treatment.svg',
    heading: ['We ', 'partner', 'closely']
  }, {
    firstName: 'ANINDYA',
    lastName: 'DUTTA',
    firstName1: 'SANDEEP',
    lastName1: 'DALMIA',
    caption: 'Student Housing Platform',
    caption1: null,
    logo: '/icons/Stanza.svg',
    image: '/icons/Anindya.svg',
    heading: ['We ', 'invest', 'early']
  }, {
    firstName: 'Asish',
    lastName: 'MOHAPATRA',
    firstName1: null,
    lastName1: null,
    caption: 'Fintech',
    caption1: 'SME Lending',
    logo: '/icons/OfBusiness.svg',
    image: '/icons/Asish.svg',
    heading: ['We', 'commit', 'personally']
  }, {
    firstName: 'Mr.',
    lastName: 'LAKSHIPATHY',
    firstName1: null,
    lastName1: null,
    caption: 'Fintech',
    caption1: 'NBFC',
    logo: '/icons/mx.svg',
    image: '/icons/Laxmipathy.svg',
    heading: ['We are', 'founders', 'first']
  }, {
    firstName: 'CHAKRADHAR',
    lastName: 'GADE',
    firstName1: 'NITIN',
    lastName1: 'KAUSHAL',
    caption: 'Fintech',
    caption1: 'NBFC',
    logo: '/icons/Country.svg',
    heading: ['We', 'commit', 'personally'],
    image: '/icons/Chakradhar.svg'
  }]

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  };
  return (
    <Slider {...settings}>
      {heros.map(hero => {
        return (<div>
          <div className={`${className}`} style={{ width: 615.94, height: 863.91, position: "relative", ...style, }}>
            <div className="" style={{ width: 571, height: 762, position: "absolute", background: "#083A4A", bottom: 50, left: 0, }}></div>
            <div className="" style={{ width: 594, height: 788, bottom: 65, left: 15, position: "absolute", display: "flex", flexDirection: "column", }}>
              <Image src={hero.image} alt="founder image" style={{ flexGrow: 1 }}></Image>
              <Image src="/icons/rectangle.svg" alt={"reactangle"} className="absolute" style={{ left: 38, bottom: 254 }} />

              <div style={{ height: 209, background: "#01576E" }}>
                <div className="text-center flex items-center" style={{ height: 118, borderBottom: "1px solid #EBEBE9" }}>
                  <h6 className="font-bold text-secondary" style={{ fontSize: 32, lineHeight: "36px", letterSpacing: "0.05em", marginLeft: 31, marginRight: 8, }}>
                    {hero.firstName}
                  </h6>
                  <h6 className="font-light text-secondary" style={{ fontSize: 32, lineHeight: "36px", letterSpacing: "0.05em", }}>
                    {hero.lastName}
                  </h6>
                </div>

                <div className="flex justify-between items-center" style={{ height: 88 }}>
                  <div style={{ marginLeft: 31, display: 'flex', justifyContent: 'space-around' }}>
                    <span className="text-secondary font-medium text-lg leading-6"> {hero.caption}</span>
                    {hero.caption1 && <span className="text-secondary font-medium text-lg leading-6"><hr style={{ width: 30, transform: 'rotate(90deg)' }} /></span>}
                    {hero.caption1 && <span className="text-secondary font-medium text-lg leading-6"> {hero.caption1}</span>}
                  </div>
                  <Image src={hero.logo} alt={"ola"} style={{ marginRight: 57 }} />
                </div>
              </div>
            </div>

            <div className="" style={{ left: 760, position: "absolute" }}>
              <p className='slide-header'>{hero.heading[0]}<span style={{ color: '#01576E' }}> {hero.heading[1]} </span> {hero.heading[2]}</p>

              <ContentSlider
                style={{
                  left: -12,
                  background: "#EBEBE9",
                  border: "1px solid #EBEBE9",
                  boxSizing: "border-box",
                  fontSize: 28,
                  lineHeight: "34px",
                  paddingTop: 24,
                  paddingLeft: 34,
                  width: '155%',
                  bottom: -347,
                  height: 301
                }}
                contentList={data}
                className="absolute bottom-0 right-0 text-primary-dark"
                header={<span>Insights from market <span className="text-accent">disruptors & investors</span></span>}
              />
            </div>
          </div>
        </div>)
      })}




    </Slider>
  );
};
