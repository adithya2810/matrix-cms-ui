import React from "react";
import { NavItem } from "@components";
import Link from 'next/link';

export type Props = {
  selectedTab: string;
  onTabSelected?: (id: string) => void;
  tabList: Array<any>;
};

const RoleTabs: React.FC<Props> = ({
  selectedTab,
  onTabSelected,
  tabList,
}) => {
  return (
    <div className="col-span-2" >
      <div className="text-right sm:hidden md:hidden careers-select font-normal text-base">Select to read</div>
      {tabList.map(({ role, id, link, city }) => {
        const tabStyle =
          id === selectedTab
            ? "text-right sm:text-left text-7xl opacity-100 text-accent md:opacity-100 sm:opacity-100 text-accent sm:text-lg"
            : "text-right sm:text-left text-7xl opacity-40 text-primary-dark sm:opacity-100 md:opacity-100 md:text-accent sm:text-accent sm:text-lg";
        const tabStyle1 =
          id === selectedTab
            ? "opacity-60 text-2xl font-extrabold sm:text-sm text-primary-dark home-content-tab2"
            : "opacity-60 text-2xl font-extrabold sm:text-sm text-primary-dark home-content-tab2 sm:opacity-80 sm:text-primary-dark sm:home-content-tab2";
        return (
          <>
            <div
              className={`hidden sm:block md:block font-extralight home-content-tab1 ${tabStyle} flex flex-col flex-wrap justify-between text-primary-dark `}
              style={{ marginBottom: 25, cursor: "pointer" }}
              onClick={() => onTabSelected(id)}
            >
              <Link href="/roleDescription" passHref>
                <div className="flex items-center ">
                  <span >
                    <div className="flex items-center justify-around">{role}<span className="hidden sm:block md:block  pl-8 menu-primary-nav-icon1"> {">"} </span>
                    </div>
                    <div className={`text-right md:text-left sm:text-left ${tabStyle1}`}>{city}</div>
                  </span>

                </div>
              </Link>
            </div>
            <div
              className={` md:hidden sm:hidden font-normal home-content-tab1 ${tabStyle} flex flex-col flex-wrap justify-between  text-primary-dark `}
              style={{ marginBottom: 40, cursor: "pointer" }}
              onClick={() => onTabSelected(id)}
            >
              <div className="flex items-center ">
                <span >
                  <div className="" style={{ lineHeight: '80px', letterSpacing: 1 }}>{role}</div>
                  <div className={`text-right sm:text-left pt-5 ${tabStyle1}`}>{city}</div>
                </span>
                <span className="hidden sm:block md:block sm:block pl-8 menu-primary-nav-icon1"> {">"} </span>
              </div>

            </div>
          </>
        );
      })}
    </div>
  );
};

export default RoleTabs;
