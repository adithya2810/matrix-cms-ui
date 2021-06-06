import React from "react";
import { NavItem } from "@components";

export type Props = {
  selectedTab: string;
  onTabSelected?: (id: string) => void;
  tabList: Array<any>;
};

const ContentTabs: React.FC<Props> = ({
  selectedTab,
  onTabSelected,
  tabList,
}) => {
  return (
    <div className="home-content-side-nav-container bg-secondary items-center flex flex-col justify-center">
      {tabList.map(({ name, id, link }) => {
        const tabStyle =
          id === selectedTab
            ? "opacity-100  text-accent"
            : "opacity-40 text-primary-dark";
        return (
          <NavItem
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
    </div>
  );
};

export default ContentTabs;
