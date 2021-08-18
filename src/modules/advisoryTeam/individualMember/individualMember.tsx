import React, { FC } from 'react';
import { ContentItem, Image, Tag } from '@components';
import Link from 'next/link';
import Icon from './Icon';
import { Markup } from 'interweave';
import { useRouter } from 'next/router';
import getContentTypeImageUrl from '@utils/getContentTypeImageUrl';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  deviceType: deviceType;
  advisoryDetail: {
    name: string;
    designation: string;
    description: string;
    linkedin: string;
    twitter: string;
    currentinvest: string;
    email: string;
    focusarea: string;
    pastinvest: string;
    Investment: boolean;
    image_url: string;
    areaofintrest: string;
    pastinvset: string;
    type: string;
    slug: string;
    blogs: any[];
  };
};

const IndividualMember: FC<propsType> = (props) => {
  const { push } = useRouter()
  const advisoryDetail = props.advisoryDetail;
  return (
    <div className="team_detail py-40 px-12 sm:py-0 sm:px-0">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4 sm:gap-0 md:gap-0">
        <div className="team-member-detail pr-5 sm:pr-0">
          <div style={{ position: 'relative' }} className="pb">
            <div className="card">
              <div className="member-profile-img ml-12 sm:ml-0">
                <Image src={advisoryDetail.image_url} alt={advisoryDetail.name} className="team-member-img sm:hidden md:hidden lg:hidden" />
                <Image src={advisoryDetail.image_url} alt={advisoryDetail.name} className="team-member-img sm:block md:block lg:block hidden" />
                <div className="sm:hidden" style={{ width: '100%', height: '100%', position: "absolute", background: "#083A4A", bottom: -10, left: -10, zIndex: 11, }}></div>
              </div>
              <div className="team-detail-overlay sm:hidden">
                <div className="member-position">
                  <div className="title-white-box p-5">
                    <h5 className="text-accent text-lg font-medium leading-6" style={{ letterSpacing: 0.5 }}>{advisoryDetail.designation}</h5>
                  </div>
                </div>
                <div className="team-member-info px-6 py-4 flex items-end">
                  <div className="member-name">
                    <h6 className="font-extrabold text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                      {advisoryDetail.name.substr(0, advisoryDetail.name.indexOf(' '))}
                    </h6>
                    <h6 className="font-light text-secondary uppercase text-3md" style={{ lineHeight: "31px", letterSpacing: "0.1em" }}>
                      {advisoryDetail.name.substr(advisoryDetail.name.indexOf(' ') + 1)}
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
                        <a href={advisoryDetail.linkedin} target="_blank">
                          <Image src="../icons/linkedin-clone.png" className="cursor-pointer" alt="LinkedIn" />
                        </a>
                      </li>
                      <li>
                        <a href={advisoryDetail.twitter} target="_blank">
                          <Image src="../icons/twitter-clone.png" className="cursor-pointer" alt="Twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="member-more-detail pt-36 sm:px-7 sm:pt-5 sm:hidden">

            {advisoryDetail.currentinvest && <>
              <h2 className="text-2xl font-semibold sm:uppercase sm:text-lg pt-5 leading-5">Current Investments</h2>
              <div className="text-justify text-lg leading-relaxed font-normal pt-4 sm:text-lg" dangerouslySetInnerHTML={{ __html: advisoryDetail.currentinvest }}></div>
            </>}

            {advisoryDetail.pastinvset && <>
              <div className="text-2xl pt-4 sm:text-lg">
                <span className="font-semibold">Past Investments</span><br />
                <div className="text-justify text-lg leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: advisoryDetail.pastinvset }}></div>
              </div>
            </>}
            {advisoryDetail.areaofintrest && <>
              <div className="text-2xl pt-4 sm:text-lg">
                <span className="font-semibold">Focus Area</span><br />
                <div className="text-justify text-lg leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: advisoryDetail.areaofintrest }}></div>
              </div>
            </>}
          </div>

          {/* Mobile section */}
          <div className="member-more-detail pt-5 sm:px-7 sm:pt-5 sm:block hidden">
            <h3 className="text-accent leading-snug font-normal text-xl">{advisoryDetail.name}</h3>
            <p className="text-1xs font-normal pt-1" style={{ color: 'rgba(156, 163, 175, 1)', fontSize: 11 }}>{advisoryDetail.designation}</p>

            {advisoryDetail.currentinvest && <>
              <h2 className="text-4xl font-medium sm:uppercase sm:text-lg">Current Investments</h2>
              <div className="text-lg pt-4 sm:text-lg" dangerouslySetInnerHTML={{ __html: advisoryDetail.currentinvest }}></div>
            </>}

            {advisoryDetail.pastinvset && <>
              <div className="text-4xl pt-4 sm:text-lg">
                <span className="font-bold">Past Investments</span><br />
                <div className="text-lg pt-3" dangerouslySetInnerHTML={{ __html: advisoryDetail.pastinvset }}></div>
              </div>
            </>}
            {advisoryDetail.areaofintrest && <>
              <div className="text-4xl pt-4 sm:text-lg">
                <span className="font-bold">Focus Area</span><br />
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: advisoryDetail.areaofintrest }}></div>
              </div>
            </>}
          </div>
          {/* Mobile section */}
        </div>

        <div className="col-span-2 pl-32 sm:pl-7 md:pl-0 md:pr-0 md:pt-11 sm:pt-5 sm:pr-5 sm:pb-5 lg:pl-16">
          <h3 className="text-2xl leading-none font-semibold text-black sm:uppercase sm:text-lg">Brief</h3>
          <div className="text-justify text-lg leading-relaxed font-normal pt-5 sm:text-lg sm:pt-5" style={{ color: 'rgba(0, 0, 0, 1)' }} dangerouslySetInnerHTML={{ __html: advisoryDetail.description.replace('Brief', '') }}></div>
        </div>
      </div>

      {advisoryDetail.blogs.length > 0 && <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-0 md:gap-0 pt-28">
        <div className="hide-mobile hide-tab pl-16 justify-center bg-secondary flex flex-col" style={{ minHeight: 600 }}>
          <div className="flex justify-between -mt-20">
            <h3 className="text-5xl leading-tight text-accent font-normal">Latest <br />content<br /> from<br /> {advisoryDetail.name.replace(' ', '\n')}</h3>
            <Link href="#" passHref>
              <Image src="../icons/sideNavButton.svg" alt="arrow-icon" className="-mr-5 cursor-pointer -mt-40" style={{ maxWidth: 80 }}></Image>
            </Link>
          </div>
          {advisoryDetail.blogs.length > 0 &&
            <Link href="#" passHref>
              <p className="cursor-pointer mt-14">View more content -{'>'}</p>
            </Link>
          }
        </div>
        {/* Mobile Section */}
        <h3 className="hidden sm:block md:block lg:block text-2xl leading-tight text-accent font-normal px-7">Latest content from {advisoryDetail.name}</h3>
        {/* Mobile Section */}

        <div className="overflow-auto home-content-container col-span-2 pl-32 sm:px-7 sm:py-8 md:px-7 md:py-8 lg:px-7 lg:py-8" style={props.deviceType.mobile ? { scrollbarWidth: 'none' } : { maxHeight: 850, scrollbarWidth: 'none', margin: '40px 0' }}>
          {advisoryDetail.blogs.map((blog, index) => {
            return <div className="relative laptop:flex mb-6 sm:mb-2 lg:mb-5 justify-center" key={index}>
              <div className="self-start relative flex-shrink-0 w-90 sm:w-full sm:ml-3" onClick={_ => push(`/blogs/${blog.slug}`)}>
                <img
                  className="image-shadow"
                  width="100%"
                  style={!props.deviceType?.mobile ? { height: 178, width: 220 } : { height: 'auto', width: '100%' }}
                  src={!props.deviceType?.mobile ? blog.cover_desktop : blog.cover_image_mobile}
                  alt="image"
                />
                {blog.displaytag && <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">
                  {blog.displaytag}
                </div>}
              </div>
              <div
                className="max-w-xl pt-8 pl-7 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
                style={{
                  background: 'white',
                  width: props.deviceType?.mobile ? '93%' : '100%',
                }}
              >
                {blog.readtime && <div className="caption text-accent-dark mb-3 sm:mb-2">{blog.readtime.toUpperCase()} READ</div>}
                <div className="sub-h1" style={props.deviceType.mobile ? {} : { fontSize: 24, lineHeight: '30px' }}>{blog.name}</div>
                <div className="flex mt-4 mb-4 items-center">
                  {!props.deviceType.mobile && <Image
                    src={getContentTypeImageUrl(blog.type, true)}
                    alt={blog.type}
                    className="flex items-center mr-8 w-8 h-10 sm:absolute sm:top-0 sm:-right-8 sm:mr-0"
                  />}
                  <div className="flex">
                    <img
                      className="mr-3 sm:w-8"
                      src={advisoryDetail.image_url ? advisoryDetail.image_url : "/images/circlePic.png"}
                      alt="video"
                      style={props.deviceType.mobile ? { width: 30, height: 30, borderRadius: 50 } : { width: 48, height: 48, borderRadius: 50 }}
                    />
                    <div>
                      <p className="sub-h2 text-accent-dark" style={props.deviceType.mobile ? {} : { fontSize: 17 }}>{advisoryDetail.name}</p>
                      <p className="caption uppercase">{advisoryDetail.designation}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap mt-5">
                  {blog.tags.map((item, index) => {
                    return (
                      <Tag
                        key={index}
                        title={item.name}
                        id={item.id}
                        selected={false}
                        className="text-xs font-normal opacity-80 mr-2 bg-secondary-light"
                        style={{
                          lineHeight: "14px",
                          letterSpacing: "10%",
                          height: props.deviceType.mobile ? 30 : 34,
                          fontSize: 12,
                          color: props.deviceType.mobile ? "#000000" : "rgba(0, 0, 0, 0.65)",
                          border: 0,
                          background: "rgba(0, 0, 0, 0.08)",
                          marginBottom: 10,
                          fontWeight: props.deviceType.mobile ? '500' : 'normal'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>}

    </div>
  );
};

export default IndividualMember;
