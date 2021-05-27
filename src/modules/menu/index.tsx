import React from "react";
import { SideNav } from "./sideNav";
import { Tag } from "@components";

export const Menu: React.FC = () => {
  return (
    <div className="bg-secondary  inset-0 flex  h-full w-full  ">
      <div className="  ">
        <div>
          <Tag selected={true} title="Education" id="abc" onClick={() => console.log("clicked")} />
        </div>
        <div></div>
        <div></div>
      </div>
      <SideNav />
    </div>
  );
};

