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

export const Founder: React.FC<Props> = ({ className, style = {} }) => {
  return (
    <div
      className={`${className}`}
      style={{
        width: 615.94,
        height: 863.91,
        position: "relative",
        ...style,
      }}
    >
      <div
        className=""
        style={{
          width: 571,
          height: 762,
          position: "absolute",
          background: "#083A4A",
          bottom: 50,
          left: 0,
        }}
      ></div>
      <div
        className=""
        style={{
          width: 594,
          height: 788,
          bottom: 65,
          left: 15,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src="/icons/Bhavish_image.svg"
          alt="founder image"
          style={{ flexGrow: 1 }}
        ></Image>
        <Image
          src="/icons/rectangle.svg"
          alt={"reactangle"}
          className="absolute"
          style={{ left: 38, bottom: 254 }}
        />

        <div style={{ height: 209, background: "#01576E" }}>
          <div
            className="text-center flex items-center"
            style={{ height: 118, borderBottom: "1px solid #EBEBE9" }}
          >
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
              BHAVISH
            </h6>
            <h6
              className="font-light text-secondary"
              style={{
                fontSize: 32,
                lineHeight: "36px",
                letterSpacing: "0.05em",
              }}
            >
              AGGARWAL
            </h6>
          </div>

          <div className="flex justify-between items-center" style={{ height: 88 }}>
            <div style={{ marginLeft: 31 }}>
              <span className="text-secondary font-medium text-lg leading-6"> Mobility</span>
            </div>
            <Image
              src={"/icons/ola.svg"}
              alt={"ola"}
              style={{ marginRight: 57 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
