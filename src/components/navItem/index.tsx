import { title } from "process";
import React from "react";
import { Image } from "@components";

export type Props = {
  title: string;
  id: string;
  onClick: (id: string) => void;
  selected: boolean;
  className?: string;
  arrow: boolean;
};

export const NavItem: React.FC<Props> = ({
  title,
  selected,
  id,
  onClick,
  className = "",
  arrow = true,
}) => {
  return (
    <div
      className={`${className} flex justify-between menu-primary-nav-text text-primary-dark`}
      style={{ marginBottom: 25 }}
      onClick={() => onClick(id)}
    >
      <span>{title}</span>
      {/* <Image src="/icons/rightArrow.large.svg" alt="image" className="menu_primary_nav_icon"  /> */}
      { (selected || arrow ) ? (
        (!selected) ? (
          <span className="menu-primary-nav-icon"> {">"} </span>
        ) : (
          <Image
            src={"/icons/sideNavButton.svg"}
            alt="nav button"
            className="-mr-5 opacity-100"
          />
        )
      ) : null}
    </div>
  );
};
