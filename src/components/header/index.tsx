import React from "react";

import { Logo } from '@components';

export type Props = {
  toggle: () => void;
}

export const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <div className="headerOuter-warpper"> {/*flex w-full z-20 justify-between items-start laptop:pl-8 mt-11 sm:mt-0 sm:p-5 */}
      <div className="page-center">
        <div className="headerInner-warpper">
          <Logo />
          <div className="menuOuter" onClick={() => toggle()} > {/* flex items-center justify-start mt-2 text-accent */}
            <h6 className="sub-h1 pr-1 menu-text">Menu</h6>
            <img src="/icons/menu.svg" className="pl-2 text-blue" />
          </div>
        </div>
      </div>

    </div>
  );
};
