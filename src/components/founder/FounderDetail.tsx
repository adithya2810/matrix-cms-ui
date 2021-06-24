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
        className=""
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "#083A4A",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <div
        className=""
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          left: 15,
          bottom: 15,
        }}
      >
        <Image
          src={background_url}
          alt="founder detail"
          style={{ flexGrow: 1 }}
        ></Image>
        <Image
          src="/icons/rectangle.svg"
          alt={"reactangle"}
          className="absolute"
          style={{ left: 38, bottom: 253 }}
        />
        <div style={{ height: 232, background: "#01576E" }}>
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
