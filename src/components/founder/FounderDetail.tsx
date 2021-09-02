import React from "react";
import { Image } from "@components";

export type Props = {
  FounderDetail?: any;
  background_url?: string;
  tags?: Array<string>;
  logo?: string;
  className?: string;
  style?: any;
  mobile: boolean;
};

export const FounderDetail: React.FC<Props> = ({
  FounderDetail,
  className = "",
  style = {},
  mobile
}) => {
  return (
    <div
      className="heroSlider02-founderSection"
      style={{
        ...{
          position: "relative",
        },
        ...style,
      }}
    >
      <div
        className="heroSlider02-founderImage-background"></div>
      <div className="heroSlider02-founderImage">
        <div className="founder-coverImage" style={mobile ? { backgroundImage: `url(${FounderDetail.founderImage})`, minHeight: 290 } : { backgroundImage: `url(${FounderDetail.founderImage})`, minHeight: 350 }}></div>

        <div className="rectangleBoxIn" style={{ minHeight: (FounderDetail.name.length > 2) ? (200 + (FounderDetail.name.length - 2) * 29) : 200, background: "#01576E" }}>
          {/* <svg className="absolute founderRectangle" style={{ top: '-63px' }} width="46" height="46" viewBox="0 0 56.167 56">
            <g transform="translate(0.167)">
              <rect id="Rectangle_1113" data-name="Rectangle 1113" width="50" height="50" transform="translate(3 3)" fill="none" stroke="#fbf9f5" strokeWidth="6" opacity="0.3" />
              <path id="Path_672" data-name="Path 672" d="M2.833,3H53V53H2.833V4.269" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="6" />
            </g>
          </svg> */}
          <div
            className={`text-center flex justify-center ${!mobile ? 'flex-col' : 'items-center'}`}
            style={{ height: (FounderDetail.name.length > 2) ? (90 + (FounderDetail.name.length - 2) * 29) : 90, borderBottom: "0.89491px solid #EBEBE9" }}
          >
            <div className={`${mobile ? 'flex-grow' : ''}`}>
              {FounderDetail.name.map((name, ind) => {
                return (
                  <div className="flex" key={name.firstName + 1}>
                    <h6
                      className="font-bold font text-secondary"
                      style={{
                        fontSize: 28,
                        lineHeight: "30px",
                        letterSpacing: "0.05em",
                        marginLeft: 20,
                        marginRight: 8,
                      }}
                    >

                      {name.firstName}
                    </h6>
                    <h6
                      className="font-light text-secondary"
                      style={{
                        fontSize: 28,
                        lineHeight: "30px",
                        letterSpacing: "0.05em",
                      }}
                    >

                      {name.lastName}
                    </h6>
                  </div>
                )
              })}
            </div>
            {mobile && <div className="flex-none w-24 px-2">
              <img src={FounderDetail.logo} alt="ola" style={{ maxWidth: 60, height: 35 }} />
            </div>}
          </div>
          <div className="founder-field-container" style={{ minHeight: "88px" }}>
            <div className="mr-4 sm:mr-0">
              <span className="text-secondary font-medium tags" style={mobile ? { fontSize: 14, lineHeight: '15px' } : { fontSize: 13, lineHeight: '15px' }}>
                {FounderDetail.tagsDetails}
              </span>
            </div>
            {!mobile && <img src={FounderDetail.logo} alt="ola" style={{ maxWidth: 100, height: 50 }} />}
          </div>
        </div>
      </div>
    </div>
  );
};
