import React from "react";
import { SideNav } from "./sideNav";
import { Tag, Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import { ContentList } from "../content/contentList";
import { TagList } from "./tagList";
import { useQuery, useReactiveVar } from "@apollo/client";
import { appConfigMutation, appConfiqQuery } from "../../../operations/appConfig";
import { appConfigVar } from "../../../models/AppConfig"

const tagList = [{
  title: "Education",
  id: "education"

},
{
  title: "Edtech",
  id: "edtech"
},
{
  title: "Consumer",
  id: "consumer"
},
{
  title: "D2C",
  id: "d2c"
},
{
  title: "Fintech",
  id: "fintech"
}
  , {
  title: "Gaming",
  id: "gaming"
}, {
  title: "social",
  id: "social"
}, {
  title: "Communication",
  id: "communication"
}, {
  title: "Marketplaces",
  id: "marketplaces"
}, {
  title: "Mobile",
  id: "Mobile"
}
]


export const Menu: React.FC = () => {

  const { data: { appConfig: navMenuState } } = useQuery(appConfiqQuery.GET_NAV_MENU_STATE);

  console.log(navMenuState);

  const className = navMenuState.menu ? "visible" : "invisible hidden"
  return (
    <div className={`bg-secondary z-30 overflow-hidden   flex  w-full flex-grow absolute top-0 ${className}`} style={{height:1053}}>
      <div className="flex justify-between bg-secondary-light flex-grow">
        <div>
          <Image src="/icons/matrixLogo.svg" alt="company logo" className="company-logo" />
        </div>
        <div className="sm:hidden menu-tags flex-grow pl-24" style={{ marginLeft: 263 }}>
          <TagList title="SECTORAL" tagList={tagList} className="mt-28 pr-11 opacity-100" onItemClick={(items) => {
            console.log(items);
          }} />

          <TagList title="NON-SECTORAL" tagList={tagList} className="pr-11 opacity-100" onItemClick={(items) => {
            console.log(items);
          }} />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="mt-11 flex items-center self-end pt-2" onClick={() => appConfigMutation.toogleMenu()}>
            <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
            <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-20 sm:mr-6 text-blue" alt="close menu"></Image>
          </div>
          <ContentList />
          <Button title={"Visit " + "Blog Page"} className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent" url="/icons/rightArrowGray.svg" />
        </div>
      </div>
      <SideNav />
    </div>
  );
};

