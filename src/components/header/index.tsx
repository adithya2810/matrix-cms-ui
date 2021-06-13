import React from 'react';

import { Logo, Image } from '@components';

export type Props = {
  toggle: () => void;
};

export const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <div className="flex absolute top-0 left-0 w-full justify-between items-start">
      <Logo />
      <div
        className="flex  items-center justify-start mt-2 text-accent "
        onClick={() => toggle()}
      >
        <h6 className="sub-h1 pr-1 menu-text">Menu</h6>
        <Image
          src="/icons/menu.svg"
          alt="menu"
          className="pl-2 laptop:mr-20 sm:mr-6 text-blue"
        ></Image>
      </div>
    </div>
  );
};
