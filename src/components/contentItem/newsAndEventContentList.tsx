import React from "react";
import { Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "../../../utils/getContentTypeImageUrl";

export type Props = {
  image_url: string;
  title: string;
  date: string;
  onClick: (id: string) => void;
  style?: any;
  className?: string;
};

export const NewsEventContentItem: React.FC<Props> = ({
  image_url,
  className = "",
  title,
  date,
  onClick
}) => {
  return (
    <div className={`${className} relative mb-12 ml-0`}  >
      <div className="itemCoverImage" style={{ backgroundImage: `url(${image_url})` }}></div>
      <div className="content-item-desc bg-secondary-light absolute p-3"
        style={{ bottom: "-2rem", left: "6rem" }}
      >
        <h5 className="text-base font-medium leading-6 text-primary-dark ml-2 p-0.5">
          {title}
        </h5>
        <div className="flex justify-between mt-3 contentButtonWrap">
          {/* <button onClick={() => onClick(content_id)} /> */}
          <Button
            title={"Read More"}
            className="h-8 w-36 text-accent text-base"
            url="/icons/rightArrowGray.svg"
          />
          <div className="date">
            {date.split('T')[0]}
          </div>
        </div>
      </div>
    </div>
  );
};
