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
}) => {
  return (
    <div className={`${className} relative mb-8 ml-0`} style={style} >
      <div className="itemCoverImage" style={{ backgroundImage: `url(${image_url})` }}>
        <a href={`/blogs/${blog_url}`} style={{ display: 'block', width: '100%', height: '100%' }}></a>
      </div>
      <div className="content-item-desc bg-secondary-light absolute p-3"
        style={{ bottom: "-1rem", left: "7.5rem" }}
      >
        <h5 className="text-sm font-medium leading-6 text-primary-dark ml-2" style={{ fontSize: 18, lineHeight: '24px' }}>
          <a href={`/blogs/${blog_url}`}>{title}</a>
        </h5>
        <div className="flex justify-between ml-2 pt-0.5">
          <span className="font-normal text-xs leading-3 text-primary-dark opacity-50" style={{ lineHeight: '14px', letterSpacing: 1 }}>
            BY {" " + author}
          </span>
          <span className="read_duration font-normal uppercase text-xs leading-3  text-primary-dark opacity-50 mr-1" style={{ lineHeight: '14px' }}>
            {read_duration + " READ"}
          </span>
        </div>
        <div className="flex justify-between mt-3 contentButtonWrap" >
          {/* <button onClick={() => onClick(content_id)} /> */}
          <Button
            title={`Read More`}
            className="h-8 w-36 text-accent text-base"
            url="/icons/rightArrowGray.svg"
            onClick={() => { location.href = `/blogs/${blog_url}` }}
            style={{ fontWeight: 500, fontSize: 18, lineHeight: '24px' }}
          />
          <Image
            src={getContentTypeImageUrl(content_type)}
            alt="content type image"
            className="mr-1 mt-4"
            style={{ width: 33, height: 20 }}
          />
        </div>
      </div>
    </div>
  );
};
