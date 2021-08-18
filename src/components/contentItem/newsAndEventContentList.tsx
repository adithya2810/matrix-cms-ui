import React from "react";
import { Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";
import Link from 'next/link';

export type Props = {
  image_url: string;
  title: string;
  date: string;
  blog_url: string;
  onClick: (id: string) => void;
  style?: any;
  className?: string;
};

export const NewsEventContentItem: React.FC<Props> = ({
  image_url,
  className = "",
  title,
  date,
  blog_url,
  onClick
}) => {

  if (!image_url) image_url = '/icons/matrixLogo.svg';

  return (
    <div className={`${className} relative mb-12 ml-0`}  >
      <div className="itemCoverImage" style={{ backgroundImage: `url(${image_url})` }}></div>
      <div className="content-item-desc bg-secondary-light absolute p-3"
        style={{ bottom: "-2rem", left: "6rem" }}
      >
        <a href={blog_url}><h5 className="text-base font-medium leading-6 text-primary-dark ml-2 p-0.5">
          {title}
        </h5>
        </a>
        <div className="flex justify-between mt-3 contentButtonWrap">
          <Button
            title={"Read More"}
            className="h-8 w-36 text-accent text-base"
            url="/icons/rightArrowGray.svg"
            onClick={() => location.href = `${blog_url}`}
          />
          <div className="date">
            {date.split('T')[0]}
          </div>
        </div>
      </div>
    </div>
  );
};
