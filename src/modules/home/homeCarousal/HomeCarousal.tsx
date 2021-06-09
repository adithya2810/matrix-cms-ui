import React from "react";
import { Image, ContentSlider } from "@components";
import { FounderDetail } from "@components/founder/FounderDetail";

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
];

const HomeCarousal = () => {
  const [backgroundUrl, setBackgroundUrl] = React.useState(
    "/icons/backgroundCarousalImage.png"
  );
  return (
    <div className="relative" style={{ height: 1080 }}>
      <div
        className="absolute h-full w-full flex flex-col"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex">
          <Image
            src="/icons/leftArrow.svg"
            alt={"right Icon"}
            height={73}
            width={37}
            style={{ marginLeft: 179 }}
          />
          <div style={{ width: 533, marginLeft: 100 }}>
            <div
              style={{
                fontWeight: 300,
                fontSize: "100px",
                lineHeight: "120px",
                letterSpacing: "-0.01em",
                opacity: 0.35,
                marginTop: 117,
              }}
            >
              {" "}
              01/05
            </div>
            <div
              className="text-secondary-light"
              style={{
                fontWeight: 200,
                fontSize: "85px",
                lineHeight: "95px",
                opacity: 1,
                marginTop: 151,
                minWidth: 545,
              }}
            >
              Tech-enabled
              <br />
              <span className="font-bold"> Student housing</span> <br />
              Platform
            </div>
          </div>
          <FounderDetail style={{ marginTop: 36, marginLeft: 103 }} />
          <Image
            src="/icons/rightArrow.large.svg"
            alt={"right Icon"}
            height={73}
            width={37}
            style={{ marginLeft: 103 }}
          />
        </div>
        <div
          className="absolute bg-accent"
          style={{ bottom: 33, left: 269, height: 246, width: 564 }}
        >
          <span
            className="text-secondary font-medium text-lg leading-6 text-center h-full flex justify-center items-center"
            style={{ writingMode: "vertical-lr", width: 56 }}
          >
            {" "}
            Hospitality Sector{" "}
          </span>
        </div>
        <ContentSlider
          style={{
            left: 325,
            background: "#EBEBE9",
            border: "1px solid #EBEBE9",
            boxSizing: "border-box",
            fontSize: 28,
            lineHeight: "34px",
            paddingTop: 24,
            paddingLeft: 34,
          }}
          contentList={data}
          className="absolute bottom-0 right-0 text-primary-dark"
          header={<span>Dive into the <span className="text-accent">Matrix Moments</span> series</span>}
        />
      </div>
    </div>
  );
};

export default HomeCarousal;
