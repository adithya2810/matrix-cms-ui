import React, { useState, useEffect } from 'react';
import { Image, ContentSlider } from "@components";
import { FounderDetail } from "@components/founder/FounderDetail";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContentSliderFeatureTwo } from '@components/contentSlider/ContentSliderFeatureTwo';

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


const heroSlider02_Data = [
  {
    id: "01",
    name: [
      {
        firstName: "BHAVISH",
        lastName: "AGGARWAL"
      }
    ],
    title: "India’s leading <span>mobility</span> player",
    founderImage: '/icons/Bhavish_image.png',
    background_url: '/icons/raybay.png',
    tagsDetails: "Ola is India’s largest mobility platform and one of the world’s largest ride-hailing companies, serving 250+ cities across India, Australia, New Zealand, and the UK.",
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
    title: "Leading chain of  <span>maternity hospitals</span>",
    founderImage: '/icons/rohit-edited.png',
    background_url: '/icons/jonathan-borba.png',
    tagsDetails: "At Cloudnine, we believe that a child is life’s greatest gift and pregnancy is one of the most magical experiences nature can offer.",
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
    title: "Tech-enabled   <span>student housing</span><br> platform",
    founderImage: '/icons/founder3-edited.png',
    background_url: '/icons/backgroundCarousalImage.png',
    tagsDetails: "Stanza Living provides fully-managed shared living accommodations to students and young professionals.",
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
    title: "<span>SME </span><br> lending",
    founderImage: '/icons/Asish_Treatment.png',
    background_url: '/icons/andreas-kind.png',
    tagsDetails: "OFB Tech (OfBusiness) is a tech-enabled platform that facilitates raw material procurement and credit for SMEs,",
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
    title: "<span>Credit led </span><br> B2B marketplace",
    founderImage: '/icons/founder4-edited.png',
    background_url: '/icons/floriane-vita.png',
    tagsDetails: "A specialized financial services company funding the people who were perceived to be unfundable",
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
    title: "D2C   <span>dairy & fresh foods</span><br>  brand",
    founderImage: '/icons/Chakradhar_Nitin.png',
    background_url: '/icons/pexels-nav-photography.png',
    tagsDetails: "Country Delight aims to bring back the basics of Milk. It promises natural, fresh and unadulterated milk directly to the doorstep of the consumer.",
    logo: "/icons/Country Delight 1.svg",
  },
  {
    id: "07",
    name: [
      { firstName: "Sourjyende ", lastName: "Medda" },
      { firstName: "Rajat ", lastName: "Shikhar" },
      { firstName: "Vinnet ", lastName: "Rao" },
      { firstName: "Sankar ", lastName: "Bora" }
    ],
    title: "<span>Social</span><br>  Commerce",
    founderImage: '/icons/Sourjyende-Rajat-Vinnet.png',
    background_url: '/icons/Sourjyende-Rajat-Vinnet-bg.png',
    tagsDetails: "DealShare is building a India-centric, “E-commerce 2.0” platform to satisfy the FMCG/grocery and general merchandize needs of lower-middle income consumers in Tier-2/3 cities.",
    logo: "/icons/Dealshare-logo-white.png",
  },
  {
    id: "08",
    name: [
      { firstName: "Vaibhav ", lastName: "Hathi" },
      { firstName: "Anurag ", lastName: "Sinha" },
      { firstName: "Rupesh ", lastName: "Kumar" }
    ],
    title: "A <span>mobile-first</span><br> credit card",
    founderImage: '/icons/onecard-boiss.png',
    background_url: '/icons/onecard-bg.png',
    tagsDetails: "India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user.",
    logo: "/icons/onecard-logo.png",
  }
]

const HomeCarousal: React.FC<{ mobile: boolean }> = ({ mobile }) => {

  const [featureData, setFeatureData] = useState([]);

  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );

  useEffect(() => {
    componentDidMount();
  }, [])

  const componentDidMount = async () => {
    const response = await fetch(' http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?_sort=published_at:DESC&FeaturedTwo=true');
    const json = await response.json();
    console.log(json)
    const featureTwoData = json.map(blogData => {
      return {
        image_url: blogData.cover_desktop,
        title: blogData.name,
        author: blogData.author[0]?.name || "",
        content_id: blogData.id || "",
        content_type: blogData.type || "Video",
        read_duration: blogData.readtime,
        blog_url: blogData.slug || ''
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
    fade: false,
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
    <div className="relative blogSliderOuter heroSlider02Outer" style={{ minHeight: 800 }}>
      <Slider {...settings}>
        {heroSlider02_Data.map(slider => {
          return (
            <div key={slider.id}>
              <div
                className="h-full w-full flex flex-col relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.450),rgba(0, 0, 0, 0.5)), url(${slider.background_url})`,
                  backgroundSize: "100% 100%",
                  minHeight: '100vh'
                }}
              >
                <div className="page-center">
                  <div className="heroSlider02-outerWarp">
                    <div className="heroSlider02-contentSection" style={{ flex: "0 50%" }}>
                      <div className="heroSlider02-slide-indicator desktop" style={{ marginTop: '8vh' }}>
                        {" "}
                        {slider.id}/0{heroSlider02_Data.length}
                      </div>
                      <div className="pr-12 text-secondary-light heroSlider02-slide-title" style={mobile ? { fontSize: 25, paddingTop: 60 } : {}} dangerouslySetInnerHTML={{ __html: slider.title }}>
                      </div>
                    </div>
                    <FounderDetail
                      FounderDetail={slider} style={mobile ? { maxWidth: 'calc(100% - 30px)', marginTop: 25 } : { flex: '0 50%', marginTop: 23 }}
                      mobile={mobile}
                    />
                    <div className="heroSlider02-slide-indicator mobile" style={{ fontSize: 25 }}>
                      {" "}
                      {slider.id}/0{heroSlider02_Data.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>)
        })}
      </Slider>

      <div
        className="absolute bg-accent hospatalitySector" style={{ bottom: 66 }}>
        <span className="text-secondary hospatalitySector-text font-medium text-lg leading-6 text-center h-full flex justify-center items-center"
        >
          {" "}
          Hospitality Sector{" "}
        </span>
      </div>
      <ContentSliderFeatureTwo
        contentList={featureData}
        className="absolute md:relative bottom-0 right-0 text-primary-dark contentItemOuter-w85"
        style={{ paddingLeft: 20, paddingTop: 20 }}
        header={<span style={{ fontSize: 28, fontWeight: 400, lineHeight: '34px' }}>Dive into the <span className="text-accent">Matrix Moments</span> series</span>}
        mobile={mobile}
      />
    </div>
  );
};

export default HomeCarousal;
