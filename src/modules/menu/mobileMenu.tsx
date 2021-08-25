import React, { useEffect, useState } from "react";
import { SideNav } from "./sideNav";
import { Tag, Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
// import { ContentList } from "../content/contentList";
import { ContentList } from "./ItemCard";
import { TagList } from "./tagList";
import { useQuery, useReactiveVar } from "@apollo/client";
import { appConfigMutation, appConfiqQuery } from "../../../operations/appConfig";
import { appConfigVar } from "../../../models/AppConfig"

export type props = {
  sectorialList?: Array<any>;
  nonSectorialList?: Array<any>;
  blogData?: Array<any>;
  blogCount?: number;
  newsInfoList?: Array<any>;
  eventInfoList?: Array<any>
  selectedTags?: Array<any>;
  onItemClick: (selected: any) => void;
  closeMenu: () => void;
  mobile: boolean;
}

export const MobileMenu: React.FC<props> = ({ sectorialList, nonSectorialList, blogData, blogCount, selectedTags, onItemClick, closeMenu, newsInfoList, eventInfoList, mobile }) => {

  const tagClicked = (item) => {
    // console.log(item)
    onItemClick(item);
  }

  return (
    <div >
      {(sectorialList.length > 0 || nonSectorialList.length > 0 || sectorialList.length > 0 || nonSectorialList.length > 0 ||
        blogData.length > 0 || newsInfoList.length > 0 || eventInfoList.length > 0) &&
        <div className="flex justify-between bg-secondary-light flex-grow">
          <Image src="/icons/matrixLogo.svg" alt="company logo" className="company-logo" />
          <div className="menuCloseButton flex items-center pt-2" onClick={() => closeMenu()}>
            <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
            <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-20 sm:mr-6 text-blue" alt="close menu"></Image>
          </div>
        </div>
      }
      {(sectorialList.length == 0 && nonSectorialList.length == 0 && sectorialList.length == 0 && nonSectorialList.length == 0 &&
        blogData.length == 0 && newsInfoList.length == 0 && eventInfoList.length == 0) &&
        <div className="flex justify-between bg-secondary-light flex-grow">
          <Image src="/icons/matrixLogo.svg" alt="company logo" className="company-logo" />
          <div className="menuCloseButton flex items-center pt-2" onClick={() => appConfigMutation.toogleMenu()}>
            <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
            <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-20 sm:mr-6 text-blue" alt="close menu"></Image>
          </div>
        </div>
      }
      {(sectorialList.length > 0 || nonSectorialList.length > 0) &&
        <div className="mobile-menuTags pt-8 pr-4 pl-4 ">
          <TagList title="SECTORAL" tagList={sectorialList} className="opacity-100" selectedTags={selectedTags} onItemClick={(item) => tagClicked(item)} />

          <TagList title="NON-SECTORAL" tagList={nonSectorialList} className="mt-8 opacity-100" selectedTags={selectedTags} onItemClick={(item) => tagClicked(item)} />
        </div>
      }
      {(blogData.length > 0) &&
        <div className="mobile-menuBlogs pt-8 pr-4 pl-4 ">
          <ContentList mobile={mobile} blogData={blogData} total={blogCount ? blogCount : blogData.length} isNewsEvent={false} header={"RELEVANT CONTENT"} page_url={'/blogs'} />
          <Button title={"Visit " + "Blog Page"}
            className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
            url="/icons/rightArrowGray.svg"
            onClick={() => location.href = '/blogs'}
          />
        </div>
      }

      {newsInfoList.length > 0 &&
        <div className="mobile-menuBlogs pt-8 pr-4 pl-4">
          <ContentList mobile={mobile} blogData={newsInfoList} isNewsEvent={true} header={"NEWS"} page_url={'/blogs/news'} />
          <Button
            title={"View " + "News page"}
            className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
            url="/icons/rightArrowGray.svg"
            onClick={() => location.href = '/blogs/news'}
          />
        </div>
      }

      {eventInfoList.length > 0 &&
        <div className="mobile-menuBlogs pt-8 pr-4 pl-4">
          <ContentList mobile={mobile} blogData={eventInfoList} isNewsEvent={true} header={"EVENTS"} page_url={'/blogs/events'} />
          <Button
            title={"View " + "Events page"}
            className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
            url="/icons/rightArrowGray.svg"
            onClick={() => location.href = '/blogs/events'}
          />
        </div>
      }
    </div >
  );
};

