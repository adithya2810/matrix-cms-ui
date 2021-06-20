import React from "react";
import { Image } from '@components';
import Link from 'next/link';

const IndividualMember = () => {
  return (
    <div className="team_detail py-40 px-12 sm:py-0 sm:px-0">
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-0">
        <div className="team-member-detail pr-5 sm:pr-0">
          <div style={{ position: 'relative' }} className="pb">
            <div className="shadow-xl card">
              <div className="member-profile-img ml-12 sm:ml-0">
                <Image src="../../image/Rajat_Agrawal1.png" alt="Rajat Agrawal" className="team-member-img" />
                <div className="sm:hidden" style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
              </div>
              <div className="team-detail-overlay sm:hidden">
                <div className="member-position">
                  <div className="title-white-box p-5">
                    <h5 className="text-accent text-lg font-medium leading-6">Director</h5>
                  </div>
                </div>
                <div className="team-member-info px-6 py-4 flex items-end">
                  <div className="member-name">
                    <h6 className="font-bold text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                      RAJAT
                    </h6>
                    <h6 className="font-light text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                      AGARWAL
                    </h6>
                  </div>
                  <div className="member-contact pl-10">
                    <ul className="flex">
                      <li className="pr-6">
                        <Link href="#" passHref>
                          <Image src="../icons/media.png" className="cursor-pointer" alt="media" />
                        </Link>
                      </li>
                      <li className="pr-6 white">
                        <Link href="#" passHref>
                          <Image src="../icons/linkedin-clone.png" className="cursor-pointer" alt="LinkedIn" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <Image src="../icons/twitter-clone.png" className="cursor-pointer" alt="Twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member-more-detail pt-44 sm:px-7 sm:pt-5">
            <h2 className="text-4xl font-semibold">Current Investments</h2>
            <p className="text-4xl pt-4"><span className="font-semibold">Fin-Tech</span> - Avail, CreditVidya, goDutch, Jupiter, LiquiLoans, OneCard, Razorpay, Ziploan</p>
            <p className="text-4xl pt-4"><span className="font-semibold">Ed-Tech</span> - Pesto, Testbook, Toddle</p>
            <p className="text-4xl pt-4"><span className="font-semibold">Other</span> - Chumbak</p>
            <p className="text-4xl pt-4"><span className="font-semibold">Past Investments</span><br />
              W Women’s Wear
            </p>
            <p className="text-4xl pt-4">
              <span className="font-semibold">Focus Area</span><br />
              Edtech, FintTech, Healthcare
            </p>
          </div>
        </div>

        <div className="col-span-2 pl-32">
          <h3 className="text-4xl leading-none font-semibold text-black">Brief</h3>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            Born to a family of entrepreneurs and having worked across several different sectors, Rajat understands the nuances of building a successful company tempered by the unique realities of the Indian business ecosystem.
          </p>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            Rajat is driven to invest in passionate entrepreneurs, helping them build scalable and admirable companies.
          </p>
          <h3 className="text-4xl leading-none font-semibold text-black pt-16">About</h3>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            From a young age, Rajat has always been determined to pursue excellence. A Gold Medalist in school, a Silver Medalist at IIT, and, again, a Gold Medalist at Indian School of Business, Rajat's academic record speaks for itself. Post IIT, Rajat joined McKinsey as a management consultant, where over a five-year stint he worked on developing insights for multiple sectors, specializing in telecom and IT services.
          </p>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            During his stint at McKinsey, Rajat worked on several topics that are relevant for start-ups - for example, setting up a lean organization, institutionalizing a strong performance management system, leveraging technology to drive sales force effectiveness, maximizing marketing RoI, fundamentally achieving a lower cost base and many more.
          </p>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            Additionally, Rajat has spent time helping streamline his own family business (a SME in Delhi) and has hands-on experience in operations, sales and marketing.
          </p>
          <p className="text-4xl leading-snug font-normal text-black pt-16">
            At Matrix, Rajat is looking to work with leading entrepreneurs, helping them build their businesses and tap the full potential of the consumer-tech opportunity in India.</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualMember;
