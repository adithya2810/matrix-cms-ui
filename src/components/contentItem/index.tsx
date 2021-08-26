import React from "react";
import { Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";
import { url } from 'inspector';

export type Props = {
  image_url: string;
  title: string;
  author: string;
  onClick: (id: string) => void;
  content_id: string;
  content_type: string;
  read_duration: string;
  blog_url: string;
  style?: any;
  className?: string;
  mobile: boolean;
};

export const ContentItem: React.FC<Props> = ({
  image_url,
  className = "",
  title,
  author,
  blog_url,
  onClick,
  content_id,
  content_type,
  read_duration,
  style = {},
  mobile
}) => {
  const capitalize = (str) => {
    if (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        if ((/[a-zA-Z]/).test(words[i].charAt(0))) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      return words.join(" ");
    }
    return '';
  };

  const contentRead = (type) => {
    let cntarr = { Video: 'Watch', Audio: 'Listen', Article: 'Read' }
    return cntarr[type] || "Read";
  }

  return (
    <div className={`${className} relative mb-8 ml-0`} style={style} >
      <div className="itemCoverImage" style={{ backgroundImage: `url(${image_url})` }}>
        <a href={`/blogs/${blog_url}`} style={{ display: 'block', width: '100%', height: '100%' }}></a>
      </div>
      <div className="content-item-desc bg-secondary-light absolute p-3 pb-1"
        style={mobile ? {} : { bottom: "-1rem", left: "7.5rem" }}
      >
        <h5 className="text-sm font-medium leading-6 text-primary-dark ml-2" style={mobile ? { fontSize: 15, lineHeight: '20px', WebkitBoxOrient: 'unset' } : { fontSize: 18, lineHeight: '24px' }}>
          <a href={`/blogs/${blog_url}`}>{title}</a>
        </h5>
        <div className="flex justify-between ml-2 pt-1">
          <span className="font-normal text-xs leading-3 text-primary-dark opacity-50" style={{ lineHeight: '14px', letterSpacing: 1 }}>
            By {" " + capitalize(author)}
          </span>
          <span className="read_duration font-normal uppercase text-xs leading-3  text-primary-dark opacity-50 mr-1" style={mobile ? { fontSize: 11, fontWeight: 500 } : { lineHeight: '14px' }}>
            {read_duration}{" "}{contentRead(content_type)}
          </span>
          {mobile && <Image
            src={getContentTypeImageUrl(content_type)}
            alt="content type image"
            className="mr-1"
            style={{ width: 30, height: 16 }}
          />}
        </div>
        {!mobile &&
          <div className="flex ml-2 justify-between mt-2 contentButtonWrap" >
            {/* <button onClick={() => onClick(content_id)} /> */}
            <Button
              title={`Read More`}
              className="h-7 w-36 text-accent text-base"
              url="/icons/rightArrowGray.svg"
              onClick={() => { location.href = `/blogs/${blog_url}` }}
              style={{ fontWeight: 500, fontSize: 18, lineHeight: '24px' }}
            />
            <Image
              src={getContentTypeImageUrl(content_type)}
              alt="content type image"
              className="mr-1 mt-2"
              style={{ width: 33, height: 20 }}
            />
          </div>
        }
      </div>
    </div>
  );
};
