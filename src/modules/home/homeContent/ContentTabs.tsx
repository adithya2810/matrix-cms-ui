import React from "react";
import { NavItem } from "@components";

export type Props = {
  selectedTab: string;
  onTabSelected?: (id: string) => void;
  tabList: Array<any>;
  mobile: boolean;
};

const ContentTabs: React.FC<Props> = ({
  selectedTab,
  onTabSelected,
  tabList,
  mobile
}) => {
  return (
    <div className="home-content-side-nav-container bg-secondary items-center sm:items-start flex flex-col justify-center">
      {tabList.map(({ name, id, link }) => {
        const tabStyle =
          id === selectedTab
            ? "opacity-100  text-accent"
            : "opacity-40 text-primary-dark";
        return (
          <NavItem
            link={link}
            key={id}
            title={name}
            id={id}
            arrow={false}
            onClick={onTabSelected}
            selected={id === selectedTab}
            className={`w-full font-extralight home-content-tab ${tabStyle}`}
          />
        );
      })}
      {!mobile && <div className="viewAllOuter">
        <a href="/blogs">View All <img src="/icons/arrow_b.svg" alt="arrow" /></a>
      </div>}
    </div>
  );
};

export default ContentTabs;
