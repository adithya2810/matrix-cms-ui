import Icon from '../FinTechTeam/Icon';
import React, { FC, useState } from 'react'
import { Image } from '@components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  className?: string
  setting?: any
};

const BlogDetails: FC<propsType> = (props) => {

  const [activeSlide, setActiveSlide] = useState(0);

  var settings;
  if (props.setting) {
    settings = props.setting;
  } else {
    settings = {
      dots: false,
      autoplay: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => setActiveSlide(current),
      nextArrow: (
        <div>
          <Image
            src="/icons/next-arrow.svg"
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
            src="/icons/prev-arrow.svg"
            alt={"right Icon"}
            height={73}
            width={37}
            style={{ maxWidth: 50 }}
          />
        </div>
      )
    };
  }

  const memberContent = [{}, {}, {}, {}, {}, {}]
  const team = [{}, {}, {}, {}]
  const investmentLogo = [{}, {}, {}, {}, {}]

  return (
    <div className="py-44 px-20 sm:py-28 sm:px-7 fintech-page">
      <h3 className="text-accent pb-40 font-normal sm:text-5xl sm:leading-tight sm:hidden md:hidden lg:hidden">Overview of the Fintech sector</h3>
      <h3 className="text-accent pb-12 font-normal sm:text-5xl sm:leading-tight sm:block md:block lg:block hidden">Overview of<br /> the Fintech<br /> sector</h3>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4 sm:gap-0 md:gap-0">
        <div className="latest-content">
          <div className="vertical-scroll">
            <h5 className="text-4xl sm:font-light sm:text-2xl font-poppins pb-10">Latest Content</h5>
            {memberContent.map((e, index) => (
              <div className="laptop:flex mb-20 sm:mb-0 lg:mb-10 justify-center" key={index}>
                <div className="self-start relative flex-shrink-0 w-90 sm:w-full sm:ml-3">
                  <img
                    className="image-shadow"
                    width="100%"
                    src={'/image/blog-img.png'}
                    alt="image"
                  />
                  <div className="sub-h2 m-2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">
                    Most Searched
                                    </div>
                </div>
                <div
                  className="max-w-xl p-8 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
                  style={{
                    background: 'white',
                    width: props.deviceType?.mobile ? '93%' : '100%',
                  }}
                >
                  <div className="caption text-accent-dark mb-4 sm:mb-2">4 MIN READ</div>
                  <div className="sub-h1">Oziva unplugged: building India’s leading clean, plant-based nutrition brand</div>
                  <div className="flex mt-6 mb-6 items-center">
                    <Icon {...props} iconType={'mic'} />
                    <div className="flex pl-5 sm:pl-0">
                      <img
                        className="mr-6 sm:w-10 sm:h-10 md:h-16"
                        src="/images/circlePic.png"
                        alt="video"
                      />
                      <div>
                        <p className="sub-h2 text-accent-dark">Avnish Bajaj</p>
                        <p className="caption uppercase">Founder & Managing Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="caption px-6 py-3 sm:px-2 sm:py-2"
                      style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      LEADERSHIP
                                        </div>
                    <div
                      className="caption px-6 py-3 sm:px-2 sm:py-2"
                      style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      HEALTHTECH
                                        </div>
                    <div
                      className="caption px-6 py-3 sm:px-2 sm:py-2 uppercase"
                      style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      D2C
                                        </div>
                    <div
                      className="caption px-6 py-3 sm:px-2 sm:py-2 uppercase"
                      style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      investors
                                        </div>
                    <div
                      className="caption px-6 py-3 sm:px-2 sm:py-2 uppercase "
                      style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      PRODUCT MARKET FIT
                                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="team-section pl-40 sm:pl-0 sm:text-center md:pl-0 lg:pl-0">
          <h5 className="text-4xl font-poppins pb-10 sm:py-11 sm:text-accent sm:font-normal">Fintech Team</h5>

          <div className="sm:hidden md:hidden lg:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4 sm:gap-0 md:gap-0">
              {team.map((e) => (
                <div>
                  <div className="team-member-detail pb-14 pr-5 sm:pr-0">
                    <div style={{ position: 'relative' }} className="pb">
                      <div className="card">
                        <div className="member-profile-img ml-12 sm:ml-0">
                          <Image src="https://matrix-cms.s3.ap-south-1.amazonaws.com/Rajat_Agrawal_565x660_9c20d1cb7e.png" alt="Rajat" className="team-member-img sm:hidden md:hidden lg:hidden" />
                          <Image src="https://matrix-cms.s3.ap-south-1.amazonaws.com/Rajat_Agrawal_565x660_9c20d1cb7e.png" alt="Rajat" className="team-member-img sm:block md:block lg:block hidden" />
                          {/* <Image src={e.image_url} alt={e.name} className="team-member-img sm:block md:block lg:block hidden" /> */}
                          <div className="sm:hidden" style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
                        </div>
                        <div className="team-detail-overlay sm:hidden">
                          <div className="member-position">
                            <div className="title-white-box p-2">
                              <h5 className="text-accent text-lg font-medium leading-6">Name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:block md:block lg:block hidden team-slick-slider">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 sm:gap-0 md:gap-0">
              <Slider {...settings}>
                {team.map((e) => (
                  <div className="team-member-detail pb-14 pr-5 sm:pb-24 sm:px-14 md:pb-24 md:px-14">
                    <div style={{ position: 'relative' }} className="pb">
                      <div className="card">
                        <div className="member-profile-img ml-12 sm:ml-0">
                          <Image src="https://matrix-cms.s3.ap-south-1.amazonaws.com/Rajat_Agrawal_565x660_9c20d1cb7e.png" alt="Rajat" className="team-member-img" />
                          <div style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
                        </div>
                        <div className="team-detail-overlay">
                          <div className="member-position">
                            <div className="title-white-box p-2">
                              <h5 className="text-accent text-tiny font-medium leading-6">Name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="text-2xl text-center -mt-5 text-accent">0{activeSlide + 1}/0{team.length}</div>
            </div>
          </div>

          <h5 className="sm:hidden md:hidden lg:hidden text-4xl font-poppins pt-10 sm:pt-16 pb-10 sm:text-accent">Fintech Investment</h5>
          <h5 className="sm:block md:block lg:block hidden text-4xl leading-snug font-poppins pt-10 sm:pt-16 pb-10 text-accent">Fintech<br /> Investment</h5>

          <div className="grid grid-cols-3 sm:content-center gap-4 sm:pb-16">
            {investmentLogo.map((e) => (
              <img src="/icons/MatrixLogoFinal_White.svg" alt="nextjs" width="156.19px" height="65px" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
