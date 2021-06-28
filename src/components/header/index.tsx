import React from "react";

import { Logo } from '@components';

export type Props = {
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <div className="absolute flex w-full z-20 justify-between items-start laptop:pl-8 mt-11 sm:mt-0 sm:p-5">
      <Logo />
      <div
        className="flex  items-center justify-start mt-2 text-accent "
        onClick={() => toggle()}
      >
        <h6 className="sub-h1 pr-1 menu-text">Menu</h6>
        <img
          src="/icons/menu.svg"
          className="pl-2 laptop:mr-20 text-blue"
        ></img>
      </div>
    </div>
  );
};
