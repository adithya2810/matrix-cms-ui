import React from "react";
import { Image, Tag } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";

export type Props = {
  image_url: string;
  image_caption: string;
  title: string;
  author: string;
  designation: string;
  author_image_url: string;
  onClick?: (id: string) => void;
  content_id: string;
  content_type: string;
  read_duration: string;
  tags?: Array<any>;
  className?: string;
  style?: any;
};

const ContentItemWithTags: React.FC<Props> = ({
  image_url,
  image_caption,
  title,
  author,
  designation,
  onClick,
  content_id,
  content_type,
  read_duration,
  author_image_url,
  tags,
  className = "",
  style = { marginBottom: 62 },
}) => {
  return (
    <div
      className={`${className} relative`}
      style={{ height: 313, width: 1035, ...style }}
    >
      <div
        className="relative"
        style={{ top: 0, left: 0, height: 313, width: 329.06 }}
      >
        <div
          className="absolute"
          style={{ width: 298, height: 253, background: "#01576E", bottom: 0 }}
        ></div>
        <Image
          src={image_url}
          alt=""
          className="absolute"
          style={{
            height: 255,
            width: 315,
            background: "red",
            left: 6,
            bottom: 6,
          }}
        ></Image>
        <div
          className="absolute flex items-center"
          style={{
            background: "#01576E",
            height: 42,
            left: 0,
            bottom: 6,
            textAlign: "center",
          }}
        >
          <div
            className="text-xl font-normal text-secondary-light text-center"
            style={{
              lineHeight: "30px",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 17,
              paddingRight: 17,
            }}
          >
            {image_caption}
          </div>
        </div>
      </div>
      <div
        className="absolute bg-secondary-light"
        style={{ width: 741, bottom: -61, right: 0 }}
      >
        <div style={{ marginLeft: 45, marginTop: 20, marginBottom: 20 }}>
          <div
            className="text-xs text-primary-dark p-0.5 pl-0 pt-0"
            style={{ lineHeight: "14px", letterSpacing: "0.1em" }}
          >
            {read_duration} READ{" "}
          </div>
          <div
            className="text-primary-dark mt-3"
            style={{ fontSize: "28px", lineHeight: "34px" }}
          >
            {title}
          </div>
          <div className="flex items-center mt-4 pt-1">
            <Image
              src={getContentTypeImageUrl(content_type)}
              height={38}
              width={22}
              alt="Writer Image"
            />
            <div className="flex " style={{ marginLeft: 30 }}>
              <Image src={author_image_url} alt="profileImage" />
              <div style={{ marginLeft: 18 }}>
                <div className="font-medium text-lg leading-6 text-primary-dark">
                  {author}
                </div>
                <div
                  className="mt-0.5 font-light text-xs "
                  style={{ lineHeight: "14px" }}
                >
                  {designation}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap" style={{ marginTop: 30 }}>
            {tags.map((item, index) => {
              return (
                <Tag
                  key={index}
                  title="LEADERSHIP"
                  id="leadership"
                  selected={false}
                  className="text-xs opacity-80 mr-2 bg-secondary-light"
                  style={{
                    lineHeight: "14px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    height: 34,
                    color: "rgba(0, 0, 0, 0.65)",
                    border: 0,
                    background: "rgba(0, 0, 0, 0.08)",
                    marginBottom: 10,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItemWithTags;
