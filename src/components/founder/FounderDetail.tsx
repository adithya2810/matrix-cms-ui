import React from "react";
import { Image } from "@components";

export type Props = {
  names?: Array<string>;
  background_url?: string;
  tags?: Array<string>;
  logo?: string;
  className?: string;
  style?: any;
};

export const FounderDetail: React.FC<Props> = ({
  names,
  background_url,
  className = "",
  style = {},
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
        <Image
          src={background_url}
          alt="founder detail"
          className="founderImage"
          style={{ flexGrow: 1 }}
        ></Image>

        <div className="rectangleBoxIn" style={{ height: 232, background: "#01576E" }}>
          <svg className="absolute founderRectangle" xmlns="http://www.w3.org/2000/svg" width="56.167" height="56" viewBox="0 0 56.167 56">
            <g transform="translate(0.167)">
              <rect id="Rectangle_1113" data-name="Rectangle 1113" width="50" height="50" transform="translate(3 3)" fill="none" stroke="#fbf9f5" stroke-width="6" opacity="0.3" />
              <path id="Path_672" data-name="Path 672" d="M2.833,3H53V53H2.833V4.269" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="6" />
            </g>
          </svg>
          <div
            className="text-center flex  flex-col justify-center"
            style={{ height: 118, borderBottom: "0.89491px solid #EBEBE9" }}
          >
            <div className="flex">
              <h6
                className="font-bold text-secondary"
                style={{
                  fontSize: 28,
                  lineHeight: "30px",
                  letterSpacing: "0.05em",
                  marginLeft: 20,
                  marginRight: 8,
                }}
              >

                {names[0]}
              </h6>
              <h6
                className="font-light text-secondary"
                style={{
                  fontSize: 28,
                  lineHeight: "30px",
                  letterSpacing: "0.05em",
                }}
              >

                {names[1]}
              </h6>
            </div>
            <div className="flex">
              <h6
                className="font-bold text-secondary"
                style={{
                  fontSize: 28,
                  lineHeight: "30px",
                  letterSpacing: "0.05em",
                  marginLeft: 20,
                  marginRight: 8,
                }}
              >
                SANDEEP
              </h6>
              <h6
                className="font-light text-secondary"
                style={{
                  fontSize: 28,
                  lineHeight: "30px",
                  letterSpacing: "0.05em",
                }}
              >
                DALMIA
              </h6>
            </div>
          </div>
          <div className="founder-field-container" style={{ height: "88px" }}>
            <div>
              <span className="text-secondary font-medium text-lg leading-6 tags">Mobility</span>
            </div>
            <img src="/icons/ola.svg" alt="ola" />

          </div>
        </div>
      </div>
    </div>
  );
};
