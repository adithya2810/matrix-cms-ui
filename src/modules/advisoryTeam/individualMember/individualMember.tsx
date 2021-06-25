import React, { FC } from 'react';
import { Image } from '@components';
import Link from 'next/link';
import Icon from './Icon';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  advisoryDetail: any;
};

const IndividualMember: FC<propsType> = (props) => {

  const memberContent = [{}, {}, {}]
  return (
    <div className="team_detail py-40 px-12 sm:py-0 sm:px-0">
      {props.advisoryDetail.map((e: any) => (

        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4 sm:gap-0 md:gap-0">
          <div className="team-member-detail pr-5 sm:pr-0">
            <div style={{ position: 'relative' }} className="pb">
              <div className="shadow-xl card">
                <div className="member-profile-img ml-12 sm:ml-0">
                  <Image src={e.image_url} alt={e.name} className="team-member-img sm:hidden md:hidden lg:hidden" />
                  <Image src={e.image_url} alt={e.name} className="team-member-img sm:block md:block lg:block hidden" />
                  <div className="sm:hidden" style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
                </div>
                <div className="team-detail-overlay sm:hidden">
                  <div className="member-position">
                    <div className="title-white-box p-5">
                      <h5 className="text-accent text-lg font-medium leading-6">{e.designation}</h5>
                    </div>
                  </div>
                  <div className="team-member-info px-6 py-4 flex items-end">
                    <div className="member-name">
                      <h6 className="font-bold text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                        {e.name.substr(0, e.name.indexOf(' '))}
                      </h6>
                      <h6 className="font-light text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                        {e.name.substr(e.name.indexOf(' ') + 1)}
                      </h6>
                    </div>
                    <div className="member-contact pl-10">
                      <ul className="flex">
                        <li className="pr-6">
                          <a href="#" target="_blank">
                            <Image src="../icons/media.png" className="cursor-pointer" alt="media" />
                          </a>
                        </li>
                        <li className="pr-6 white">
                          <a href={e.linkedin} target="_blank">
                            <Image src="../icons/linkedin-clone.png" className="cursor-pointer" alt="LinkedIn" />
                          </a>
                        </li>
                        <li>
                          <a href={e.twitter} target="_blank">
                            <Image src="../icons/twitter-clone.png" className="cursor-pointer" alt="Twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="member-more-detail pt-44 sm:px-7 sm:pt-5 sm:hidden">
              <h2 className="text-4xl font-semibold sm:uppercase sm:text-lg pt-5">Current Investments</h2>
              {/* <p className="text-4xl pt-4 sm:text-lg"><span className="font-semibold">Fin-Tech</span> - Avail, CreditVidya, goDutch, Jupiter, LiquiLoans, OneCard, Razorpay, Ziploan</p>
              <p className="text-4xl pt-4 sm:text-lg"><span className="font-semibold">Ed-Tech</span> - Pesto, Testbook, Toddle</p>
              <p className="text-4xl pt-4 sm:text-lg"><span className="font-semibold">Other</span> - Chumbak</p> */}
              <p className="text-4xl pt-4 sm:text-lg">{e.currentinvest}
                {/* W Women’s Wear */}
              </p>
              <p className="text-4xl pt-4 sm:text-lg">
                <span className="font-semibold">Past Investments</span><br />
                {e.pastinvset}
              </p>
              <p className="text-4xl pt-4 sm:text-lg">
                <span className="font-semibold">Focus Area</span><br />
                {e.areaofintrest}
              </p>
            </div>

            {/* Mobile section */}
            <div className="member-more-detail pt-44 sm:px-7 sm:pt-5 sm:block hidden">
              <h3 className="text-accent text-2xl">{e.name}</h3>
              <p className="text-1xs text-grey pt-2">{e.designation}</p>
              <h2 className="text-4xl font-semibold sm:uppercase sm:text-lg pt-5">Current Investments</h2>
              {/* <p className="text-4xl pt-4 sm:text-lg"><span className="font-bold">Fin-Tech</span><br /> Avail, CreditVidya, goDutch, Jupiter, LiquiLoans, OneCard, Razorpay, Ziploan</p>
              <p className="text-4xl pt-4 sm:text-lg"><span className="font-bold">Ed-Tech</span><br /> Pesto, Testbook, Toddle</p>
              <p className="text-4xl pt-4 sm:text-lg"><span className="font-bold">Other</span><br /> Chumbak, Saveo</p> */}
              <p className="text-4xl pt-4 sm:text-lg">
                {/* <span className="font-bold">Past Investments</span><br /> */}
                {/* W Women’s Wear */}{e.currentinvest}
              </p>
              <p className="text-4xl pt-4 sm:text-lg">
                <span className="font-bold">Past Investments</span><br />
                {e.pastinvset}
              </p>
              <p className="text-4xl pt-4 sm:text-lg"><span className="font-bold">Focus Area</span><br /> {e.areaofintrest}</p>
            </div>
            {/* Mobile section */}
          </div>

          <div className="col-span-2 pl-32 sm:pl-7 md:pl-0 md:pr-0 md:pt-11 sm:pt-5 sm:pr-5 sm:pb-5 lg:pl-16">
            <h3 className="text-4xl leading-none font-semibold text-black sm:uppercase sm:text-lg">Brief</h3>
            {/* <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">
              Born to a family of entrepreneurs and having worked across several different sectors, Rajat understands the nuances of building a successful company tempered by the unique realities of the Indian business ecosystem.
            </p>
            <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">
              Rajat is driven to invest in passionate entrepreneurs, helping them build scalable and admirable companies.
            </p>
            <h3 className="text-4xl leading-none font-semibold text-black pt-16 sm:text-lg sm:pt-5 sm:uppercase">About</h3>
            <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">
              From a young age, Rajat has always been determined to pursue excellence. A Gold Medalist in school, a Silver Medalist at IIT, and, again, a Gold Medalist at Indian School of Business, Rajat's academic record speaks for itself. Post IIT, Rajat joined McKinsey as a management consultant, where over a five-year stint he worked on developing insights for multiple sectors, specializing in telecom and IT services.
            </p>
            <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">
              During his stint at McKinsey, Rajat worked on several topics that are relevant for start-ups - for example, setting up a lean organization, institutionalizing a strong performance management system, leveraging technology to drive sales force effectiveness, maximizing marketing RoI, fundamentally achieving a lower cost base and many more.
            </p>
            <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">
              Additionally, Rajat has spent time helping streamline his own family business (a SME in Delhi) and has hands-on experience in operations, sales and marketing.
            </p> */}
            <p className="text-4xl leading-snug font-normal text-black pt-16 sm:text-lg sm:pt-5">{e.description}</p>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-0 md:gap-0 pt-28">
        <div className="hide-mobile hide-tab pl-16 justify-center bg-secondary flex flex-col">
          <div className="flex justify-between">
            <h3 className="text-8xl leading-tight text-accent font-normal">Latest <br />content<br /> from<br /> Rajat</h3>
            <Link href="#" passHref>
              <Image src="../icons/sideNavButton.svg" alt="arrow-icon" className="-mr-5 cursor-pointer"></Image>
            </Link>
          </div>
          <Link href="#" passHref>
            <p className="cursor-pointer mt-14">View more content -{'>'}</p>
          </Link>
        </div>
        {/* Mobile Section */}
        <h3 className="hidden sm:block md:block lg:block text-2xl leading-tight text-accent font-normal px-7">Latest content from Rajat</h3>
        {/* Mobile Section */}

        <div className="col-span-2 pl-32 sm:px-7 sm:py-8 md:px-7 md:py-8 lg:px-7 lg:py-8">
          {memberContent.map((e, index) => (
            <div className="laptop:flex mb-32 sm:mb-0 lg:mb-10 justify-center" key={index}>
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
                      className="mr-6 sm:w-12 md:h-16"
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
                  <div
                    className="caption px-6 py-3 sm:px-2 sm:py-2 uppercase"
                    style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                  >
                    communication
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualMember;
