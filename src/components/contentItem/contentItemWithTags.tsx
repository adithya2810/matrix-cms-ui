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
  blog_url: string
  onClick?: (id: string) => void;
  content_id: string;
  content_type: string;
  read_duration: string;
  tags?: Array<any>;
  className?: string;
  style?: any;
  mobile: boolean;
};

const ContentItemWithTags: React.FC<Props> = ({
  image_url,
  image_caption,
  title,
  author,
  designation,
  blog_url,
  onClick,
  content_id,
  content_type,
  read_duration,
  author_image_url,
  tags,
  className = "",
  style = {},
  mobile
}) => {
  console.log(tags)
  return (
    <div
      className={`${className} relative contentWithTagbox mb-6 laptop:flex`}
      style={{ ...style }}
    >
      <div
        className="relative contentWithTagImgbox flex-shrink-0 self-start"
        style={mobile ? { height: 180 } : { height: 200, width: 260 }}
      >
        <div
          className="absolute"
          style={{ width: 'calc(100% - 15px)', height: 'calc(100% - 15px)', background: "#01576E", bottom: 0 }}
        ></div>
        <div className="blogCoverImage" style={{ backgroundImage: `url(${image_url})`, width: '100%', height: '100%', backgroundSize: 'cover' }}>
          <a href={`/blogs/${blog_url}`} style={{ display: 'block', width: '100%', height: '100%' }}></a>
        </div>

        <div
          className="absolute flex items-center contentCategoryBox"
          style={{
            background: "#01576E",
            height: 42,
            left: 0,
            bottom: 0,
            textAlign: "center",
          }}
        >
          {image_caption && <div
            className="text-xl font-medium text-secondary-light text-center sm:text-sm"
            style={{
              lineHeight: "30px",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 17,
              paddingRight: 17,
            }}
          >
            {image_caption}
          </div>}
        </div>
      </div>
      <div
        className="relative bg-secondary-light contentWithTagWrap mt-8 sm:mt-0 -left-6"
        style={mobile ? { width: "calc(100% - 50px)", left: -5 } : { width: "100%" }}
      >
        {mobile && <div className="absolute -right-9 text-white" style={{ padding: 8, right: '-2.5rem', width: 40, backgroundColor: '#01576E' }}><Image
          src={getContentTypeImageUrl(content_type, false, 'white')}
          alt={content_type}
        /></div>}
        <div className="pl-7 pt-5">
          <div
            className="text-xs font-normal text-primary-dark p-0.5 pl-0 pt-0 uppercase"
            style={{ lineHeight: "14px", letterSpacing: "0.1em" }}
          >
            {read_duration} READ{" "}
          </div>
          <div
            className="text-primary-dark font-normal mt-3"
            style={mobile ? { fontSize: "20px", lineHeight: "20px" } : { fontSize: "28px", lineHeight: "34px" }}
          >
            <a href={`/blogs/${blog_url}`}>{title}</a>

          </div>
          <div className="flex items-center mt-4 pt-1">
            {!mobile && <Image
              src={getContentTypeImageUrl(content_type, true)}
              alt={content_type}
              className="sm:absolute"
            />}
            <div className="flex " style={mobile ? { marginLeft: 5 } : { marginLeft: 20 }}>
              <Image src={author_image_url} alt="profileImage" style={mobile ? { height: 28, width: 28, borderRadius: 50 } : { height: 48, width: 48, borderRadius: 50 }} />
              <div style={{ marginLeft: 15 }}>
                <div className="font-medium text-lg leading-6 text-primary-dark" style={mobile ? { fontSize: 14, lineHeight: '18px', letterSpacing: 1 } : { letterSpacing: 1 }}>
                  {author}
                </div>
                <div
                  className="mt-0.5 font-normal text-xs"
                  style={mobile ? { fontSize: 11, lineHeight: "14px", letterSpacing: 1, fontWeight: 500 } : { lineHeight: "14px", letterSpacing: 1 }}
                >
                  {designation}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-5">
            {tags.map((item, index) => {
              return (
                <Tag
                  key={index}
                  title={item.title}
                  id={item.slug}
                  selected={false}
                  className="text-xs font-normal opacity-80 mr-2 bg-secondary-light"
                  style={{
                    lineHeight: "14px",
                    letterSpacing: "10%",
                    height: mobile ? 30 : 34,
                    fontSize: 12,
                    color: mobile ? "#000000" : "rgba(0, 0, 0, 0.65)",
                    border: 0,
                    background: "rgba(0, 0, 0, 0.08)",
                    marginBottom: 10,
                    fontWeight: mobile ? '500' : 'normal'
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
