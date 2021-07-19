import { title } from "process";
import React from "react";
import { Image } from "@components";

export type Props = {
  title: string;
  link: string;
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
  link,
  onClick,
  className = "",
  arrow = true,
}) => {
  return (
    <div
      className={`${className} flex justify-between menu-primary-nav-text text-primary-dark`}
      style={{ marginBottom: 20 }}
      onClick={() => onClick(id)}
    >
      {link ?
        <a href={link}>
          <span style={{ cursor: 'pointer' }}>{title}</span>
          {/* <Image src="/icons/rightArrow.large.svg" alt="image" className="menu_primary_nav_icon"  /> */}
        </a> : <span style={{ cursor: 'pointer' }}>{title}</span>
      }

      {(selected || arrow) ? (
        (!selected) ? (
          <span className="menu-primary-nav-icon"> {">"} </span>
        ) : (
          <Image
            src={"/icons/sideNavButton.svg"}
            alt="nav button"
            className="-mr-5 opacity-100"
            style={{ maxWidth: 80 }}
          />
        )
      ) : null}
    </div>
  );
};
