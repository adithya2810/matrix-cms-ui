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
  className = "",
  style = {},
}) => {
  return (
    <div
      className=""
      style={{
        ...{
          width: 650,
          height: 744,
          position: "relative",
        },
        ...style,
      }}
    >
      <div
        className=""
        style={{
          width: 620,
          height: 711,
          position: "absolute",
          background: "#083A4A",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <div
        className=""
        style={{
          width: 638,
          height: 732,
          position: "absolute",
          left: 15,
          bottom: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src="/icons/founderDetail.jpg"
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
                  fontSize: 32,
                  lineHeight: "36px",
                  letterSpacing: "0.05em",
                  marginLeft: 31,
                  marginRight: 8,
                }}
              >
                ANINYA
              </h6>
              <h6
                className="font-light text-secondary"
                style={{
                  fontSize: 32,
                  lineHeight: "36px",
                  letterSpacing: "0.05em",
                }}
              >
                DUTTA
              </h6>
            </div>
            <div className="flex">
              <h6
                className="font-bold text-secondary"
                style={{
                  fontSize: 32,
                  lineHeight: "36px",
                  letterSpacing: "0.05em",
                  marginLeft: 31,
                  marginRight: 8,
                }}
              >
                SANDEEP
              </h6>
              <h6
                className="font-light text-secondary"
                style={{
                  fontSize: 32,
                  lineHeight: "36px",
                  letterSpacing: "0.05em",
                }}
              >
                DALMIA
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
