import React from 'react';

import { Logo, Image } from '@components';

export type Props = {
  toggle: () => void;
};

export const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <div className="flex absolute top-0 left-0 w-full justify-between items-start">
      <Image
        className="header-logo"
        src="/icons/matrixLogo.svg"
        alt="company-logo"
      />
      <div className="header-menu flex items-center " onClick={() => toggle()}>
        <span className="header-menu-text">Menu</span>
        <Image
          src="/icons/menu.svg"
          alt="menu"
          height={24}
          width={24}
          style={{ marginLeft: 12 }}
        ></Image>
      </div>
    </div>
  );
};
