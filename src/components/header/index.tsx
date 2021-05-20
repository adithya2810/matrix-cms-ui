import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-start laptop:ml-14 laptop:pl-8 mt-11 sm:ml-7">
      <Logo />
      <div className="flex mt-2 items-center justify-start">
        <h6 className="sub-h1 pr-1 menu-text">Menu</h6>
        <img src="/icons/menu.svg" className="pl-2 laptop:mr-20 sm:mr-6"></img>
      </div>
    </div>
  );
};
