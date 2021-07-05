import React, { Fragment, ReactComponentElement, useEffect } from "react";
import { navMenu } from "../../../constants";
import { NavItem, Image } from "@components";
import { socialMedia } from "../../../constants/socialMedia";
import Button from "@components/button/PrimaryButtonIconRight";

export type Props = {
  menuIndex: number;
  onMenuClicked: (menuType: string, selected: any, index: number) => void;
}

export const SideNav: React.FC<Props> = ({ onMenuClicked, menuIndex }: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [secSelectedIndex, setSecSelectedIndex] = React.useState(null);
  const [menuType, setMenuType] = React.useState(null);
  const [mediaToggle, setMediaTogglee] = React.useState(false);


  useEffect(() => {
    if (menuIndex < 0) {
      setSecSelectedIndex(null)
      setSelectedIndex(null)
    }
  }, [menuIndex])

  const isSelected = (index: number) => {
    if (index == selectedIndex) return true;
    else return false;
  };

  const isSecondaryMenu = (index) => {
    if (menuType == "SECONDARY_MENU" && index == secSelectedIndex) return true;
    else return false;
  };

  const menuClicked = (menu, id, index) => {
    setMenuType(menu);
    if (menu == "PRIMARY_MENU") {
      setSelectedIndex(index)
      onMenuClicked("PRIMARY_MENU", id, index);
      setSecSelectedIndex(null)
    } else if (menu == "SECONDARY_MENU") {
      onMenuClicked("SECONDARY_MENU", id, index);
      setSecSelectedIndex(index)
      setSelectedIndex(null)
    }

  }

  const toggle = (index) => {
    setSecSelectedIndex(index)
  }


  return (
    <div
      className="siteSidenavMenuWrap side-nav z-30 absolute bg-accent-dark text-secondary  flex flex-col justify-between"
      style={{ left: 0, fontSize: 54, lineHeight: "62px" }}
    >
      <div className="block">
        <div>
          {navMenu.primary.map((menuItem: any, index) => {
            return (
              <NavItem
                title={menuItem.name}
                link={menuItem.link}
                className={
                  !isSelected(index)
                    ? " text-secondary-light opacity-50"
                    : "text-secondary-light opacity-100"
                }
                arrow={true}
                key={menuItem.key}
                id={menuItem.key}
                onClick={() => menuClicked("PRIMARY_MENU", menuItem.key, index)}
                selected={isSelected(index)}
              />
            );
          })}
        </div>

        <div className="desktop">
          {navMenu.secondary.map((menuItem: any, index) => {
            return (
              <div
                key={menuItem.key}
                className="flex justify-between"
                style={{ marginBottom: 10 }}
                onClick={() => menuClicked("SECONDARY_MENU", menuItem.key, index)}
              >
                <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
                {isSecondaryMenu(index) ?
                  <Image
                    src={"/icons/sideNavButton.svg"}
                    alt="nav button"
                    className="-mr-5 opacity-100"
                    style={{ maxHeight: 50 }}
                  />
                  :
                  <span className="menu-secondary-nav-icon"> {">"} </span>
                }
              </div>
            );
          })}
        </div>
        <div className="mobile">
          {navMenu.secondary.map((menuItem: any, index) => {
            return (
              <div
                key={menuItem.key + 1}
                className="flex justify-between flex-wrap"
                style={{ marginBottom: 10 }}
                onClick={() => toggle(index)}
              >
                <a href={menuItem.link}>
                  <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
                </a>
                {isSecondaryMenu(index) ?
                  <span className={`menu-secondary-nav-icon inverted`}> {">"} </span>
                  :
                  <span className="menu-secondary-nav-icon"> {">"} </span>
                }
                {menuItem.subMenu.length > 0 &&
                  <div className="subMenuOuter flex-wrap flex flex-col">
                    {menuItem.subMenu.map(menu => {
                      return (
                        <div className="flex-wrap flex justify-between" style={{ marginTop: 20 }}
                          onClick={() => menuClicked("SECONDARY_MENU", menu.key, index)}>
                          <h5 className="menu-secondary-nav-text" key={menu.key + 1}>{menu.name}</h5>
                          <span className="menu-secondary-nav-icon"> {">"} </span>
                        </div>
                      )
                    })}

                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>
      <div className=" mr-16">
        <div >
          <h6 className="mt-4 font-normal text-secondary" style={{ fontSize: 28, lineHeight: "34px" }}>Let's stay engaged </h6>
          <h6 className="font-normal text-xs capitalize " style={{ marginTop: 10, lineHeight: "14px" }}>
            SIGN UP FOR THE MATRIX MOMENTS SERIES
          </h6>
          <input
            className="mt-2 text-secondary bg-accent w-full"
            style={{ color: "#FBF9F5", marginTop: 15, fontSize: 15, lineHeight: "18px", opacity: 0.8, height: 38 }}
            type="email"
            placeholder="Your email address goes here"
          />
          <Button
            title="Subscribe"
            url="/icons/arrow.svg"
            onClick={() => console.log("subscribe")}
            className="text-lg leading-6"
            style={{ color: "#0FB6B8" }}
          />
        </div>
        <div className="flex " style={{}}>
          {socialMedia.map((item) => {
            return (
              <a className="p-1 mr-10" href={item.link} key={item.key}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  className=" "
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
