import React, { useState, useEffect } from 'react';
import { Image, ContentSlider } from "@components";
import { FounderDetail } from "@components/founder/FounderDetail";
import Slider from "react-slick";
import qs from "qs";
import _ from "lodash";

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
    title: "<span>B2B Commerce, </span><br> Fintech",
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
    title: "<span>SME </span><br> lending",
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
    title: "<span>Mobile-first</span><br> credit card",
    founderImage: '/icons/onecard-boiss.png',
    background_url: '/icons/onecard-bg.png',
    tagsDetails: "India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user.",
    logo: "/icons/onecard-logo.png",
  },
  {
    id: "09",
    name: [
      { firstName: "Harshil ", lastName: "Mathur" },
      { firstName: "Shashank ", lastName: "Kumar" }
    ],
    title: "<span>Full-Stack</span><br/> financial service company",
    founderImage: '/icons/razorpay-boss.png',
    background_url: '/icons/razorpay-bg.png',
    tagsDetails: "Razorpay, a full-stack financial services company, helps Indian businesses with comprehensive and innovative solutions built to address the entire length and breadth of the payment and banking journey.",
    logo: "/icons/razorpay-white-logo.png",
  },
  {
    id: "10",
    name: [
      { firstName: "Manish ", lastName: "Patel" }
    ],
    title: "<span>POS solutions</span><br/> for all types of payment acceptance",
    founderImage: '/icons/mswipe-manish-patel.png',
    background_url: '/icons/mswipe-bg.png',
    tagsDetails: "Mswipe, the mobile point-of-sale solutions company, has led the way for entrepreneur led businesses in disrupting the merchant side of the payment ecosystem.",
    logo: "/icons/mswipe-white-logo.png",
  },
  {
    id: "11",
    name: [
      { firstName: "Umang ", lastName: "Bedi" },
      { firstName: "Virendra ", lastName: "Patel" }
    ],
    title: "<span>India’s #1</span><br/> content aggregator",
    founderImage: '/icons/dailyhunt-boss.png',
    background_url: '/icons/dailyhunt-bg.png',
    tagsDetails: "India’s #1 news & local language content application",
    logo: "/icons/dailyhunt-logo.png",
  }
];

const feature_blogs = [
  "60f55ea43e54f918dc97b3b0", //ola
  "61154f5e7acdcae02c64ddc1", //Cloudnine
  "6115fd037acdcae02c64dde0", //Stanza
  "611606d37acdcae02c64ddf2", //OfBusiness
  "611521947acdcae02c64dda7", //five-star
  "611604bc7acdcae02c64ddef", //Country Delight
  "611547307acdcae02c64ddaf", //Dealshare
  "611557237acdcae02c64ddcc", //onecard
  "611608a67acdcae02c64ddf5", //razorpay
  "611522037acdcae02c64dda8", //mswipe
  "611548d47acdcae02c64ddb3", //dailyhunt
];

const HomeCarousal: React.FC<{ mobile: boolean }> = ({ mobile }) => {

  const [featureData, setFeatureData] = useState([]);

  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );

  useEffect(() => {
    componentDidMount();
  }, [])

  const componentDidMount = async () => {
    const psqury = { _where: { _id_in: feature_blogs, FeaturedOne: true } };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?${qs.stringify(psqury)}`);
    const json = await response.json();
    // console.log(json)
    const featureTwoData = json.map(blogData => {
      return {
        image_url: blogData.cover_desktop,
        title: blogData.name,
        author: blogData.author[0]?.name || "",
        content_id: blogData.id || "",
        content_type: blogData.content_type.name,
        read_duration: blogData.readtime,
        blog_url: blogData.slug || '',
        order: _.indexOf(feature_blogs, blogData._id)
      }
    })
    setFeatureData(_.sortBy(featureTwoData, ["order"]));
  }


  var settings = {
    dots: false,
    autoplay: false,
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
                        {slider.id}/{heroSlider02_Data.length > 9 ? heroSlider02_Data.length : `0${heroSlider02_Data.length}`}
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
                      {slider.id}/{heroSlider02_Data.length > 9 ? heroSlider02_Data.length : `0${heroSlider02_Data.length}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>)
        })}
      </Slider>

      {/* <div
        className="absolute bg-accent hospatalitySector" style={{ bottom: 66 }}>
        <span className="text-secondary hospatalitySector-text font-medium text-lg leading-6 text-center h-full flex justify-center items-center"
        >
          {" "}
          Hospitality Sector{" "}
        </span>
      </div> */}
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
