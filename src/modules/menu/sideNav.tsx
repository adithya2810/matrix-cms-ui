import React, { Fragment, ReactComponentElement, useEffect } from "react";
import { navMenu } from "../../../constants";
import { NavItem, Image } from "@components";
import { socialMedia } from "../../../constants/socialMedia";
import Button from "@components/button/PrimaryButtonIconRight";
import { useRouter } from 'next/router';
import { NONAME } from 'dns';

export type Props = {
  mobile: boolean;
  menuIndex: number;
  onMenuClicked: (menuType: string, selected: any, index: number) => void;
}

export const SideNav: React.FC<Props> = ({ onMenuClicked, menuIndex, mobile }: Props) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [secSelectedIndex, setSecSelectedIndex] = React.useState(null);
  const [menuType, setMenuType] = React.useState(null);
  const [mediaToggle, setMediaTogglee] = React.useState(false);


  useEffect(() => {
    if (menuIndex < 0) {
      setSecSelectedIndex(null)
      setSelectedIndex(null)
    }
    if (menuIndex == null && !mobile) {
      setSelectedIndex(2)
      onMenuClicked("PRIMARY_MENU", 'footer_blog', 2);
      setSecSelectedIndex(null)
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
      className="siteSidenavMenuWrap side-nav z-30 absolute bg-accent-dark text-secondary flex flex-col justify-between"
      style={{ left: 0, fontSize: 54, lineHeight: "62px" }}
    >
      <div className="block flex flex-col justify-between">
        <div className="pb-5" style={{ display: 'none' }}>
          {navMenu.primary.map((menuItem: any, index) => {
            return (
              <NavItem
                title={menuItem.name}
                link={menuItem.link}
                className={
                  !isSelected(index)
                    ? ` text-secondary-light opacity-50`
                    : `text-secondary-light opacity-100`
                }
                arrow={mobile ? false : menuItem.key === "footer_blog"}
                key={menuItem.key}
                id={menuItem.key}
                onClick={() => (mobile && menuItem.key == "footer_blog") ? location.href = menuItem.link : menuClicked("PRIMARY_MENU", menuItem.key, index)}
                selected={isSelected(index)}
              />
            );
          })}
        </div>

        <div className="desktop">
          {navMenu.primary.map((menuItem: any, index) => {
            return (
              <div key={menuItem.key} className={`flex justify-between ${menuItem.key} cursor-pointer`}
                style={{ marginBottom: 10 }} onClick={() => window.location.href = `${menuItem.link}`}
              >
                <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
              </div>
            );
          })}
          {navMenu.secondary.map((menuItem: any, index) => {
            return (
              <div
                key={menuItem.key}
                className={`flex justify-between ${menuItem.key} cursor-pointer`}
                style={{ marginBottom: 10 }}
                onClick={() => menuClicked("SECONDARY_MENU", menuItem.key, index)}
              >
                <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
                {menuItem.subMenu.length > 0 && <>{isSecondaryMenu(index) ?
                  <Image
                    src={"/icons/sideNavButton.svg"}
                    alt="nav button"
                    className="-mr-5 opacity-100"
                    style={{ maxHeight: 50 }}
                  />
                  :
                  <span className="menu-secondary-nav-icon"> {">"} </span>
                } </>}
              </div>
            );
          })}
        </div>
        <div className="mobile">
          {navMenu.primary.map((menuItem: any, index) => {
            return (
              <div key={menuItem.key} className="flex justify-between flex-wrap"
                style={{ marginBottom: 10 }} onClick={() => window.location.href = `${menuItem.link}`}
              >
                <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
              </div>
            );
          })}
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
                {/* {menuItem.subMenu.length > 0 && <>{isSecondaryMenu(index) ?
                    <span className={`menu-secondary-nav-icon inverted`}> {">"} </span>
                    :
                    <span className="menu-secondary-nav-icon"> {">"} </span>
                  } */}

                {menuItem.subMenu.length > 0 &&
                  <div className="subMenuOuter flex-wrap flex flex-col">
                    {menuItem.subMenu.map((menu, i) => {
                      return (
                        <div key={menu.key + 1} className={`flex-wrap flex justify-between ${mobile ? 'cursor-pointer' : ''}`} style={{ marginTop: i == 0 ? 0 : 10 }}
                          onClick={() => mobile ? location.href = menu.link : menuClicked("SECONDARY_MENU", menu.key, index)}>
                          <h5 className="menu-secondary-nav-text" key={menu.key + 1}>{menu.name}</h5>
                          {/* <span className="menu-secondary-nav-icon"> {">"} </span> */}
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
      <div className="mr-14 mb-5 flex flex-col justify-between">
        <div className="">
          <h6 className="mt-4 font-normal text-secondary" style={{ fontSize: 24, lineHeight: "34px" }}>Let's stay engaged </h6>
          <h6 className="font-normal text-xs" style={{ marginTop: 10, lineHeight: "14px", letterSpacing: 1 }}>
            SIGN UP FOR THE MATRIX MOMENTS SERIES
          </h6>
          <input
            className="pl-2 text-secondary bg-accent w-full"
            style={{ color: "#FBF9F5", marginTop: 5, fontSize: 13, height: 35 }}
            type="email"
            placeholder="Your email address goes here"
          />
          <Button
            title="Subscribe"
            url="/icons/arrow.svg"
            onClick={() => console.log("subscribe")}
            className="text-base leading-6"
            style={{ color: "#0FB6B8" }}
          />
        </div>
        <div className="flex pt-5">
          {socialMedia.map((item) => {
            return (
              <a className="p-1 mr-6" href={item.link} key={item.key} target="__blank">
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
