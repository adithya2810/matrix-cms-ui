import React from "react";
import { navMenu } from "../../../constants";
import { NavItem, Image } from "@components";
import { socialMedia } from "../../../constants/socialMedia";
import Button from "@components/button/PrimaryButtonIconRight";

export const SideNav: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const isSelected = (index: number) => {
    if (index == selectedIndex) return true;
    else return false;
  };

  return (
    <div
      className="side-nav z-30 absolute bg-accent-dark text-secondary  flex flex-col justify-between"
      style={{ left: 0, fontSize: 54, lineHeight: "62px" }}
    >
      <div className="block">
        <div>
          {navMenu.primary.map((menuItem: any, index) => {
            return (
              <NavItem
                title={menuItem.name}
                className={
                  !isSelected(index)
                    ? " text-secondary-light opacity-50"
                    : "text-secondary-light opacity-100"
                }
                arrow={true}
                key={menuItem.key}
                id={menuItem.key}
                onClick={() => setSelectedIndex(index)}
                selected={isSelected(index)}
              />
            );
          })}
        </div>

        <div>
          {navMenu.secondary.map((menuItem: any) => {
            return (
              <div
                key={menuItem.key}
                className="flex justify-between"
                style={{ marginBottom: 21 }}
              >
                <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
                <span className="menu-secondary-nav-icon"> {">"} </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" mr-16">
        <span className="ml-4">
          <h6 className="mt-4 font-normal text-secondary" style={{ fontSize:28, lineHeight:"34px"}}>Let's stay engaged </h6>
          <h6 className="font-normal text-xs capitalize " style={{marginTop:10,lineHeight:"14px"}}>
            SIGN UP FOR THE MATRIX MOMENTS SERIES
          </h6>
          <input
            className="mt-2 text-secondary bg-accent w-full"
            style={{ color: "#FBF9F5" , marginTop:15,fontSize:15, lineHeight:"18px",opacity:0.8, height:38}}
            type="email"
            placeholder="Your email address goes here"
          />
          <Button
            title="Subscribe"
            url="/icons/arrow.svg"
            onClick={() => console.log("subscribe")}
            className="text-lg leading-6"
            style={{color: "#0FB6B8"}}
          />
        </span>
        <div className="flex " style={{marginTop:60 , marginBottom:58}}>
          {socialMedia.map((item) => {
            return (
              <a className="p-1 mr-10" href={item.link}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  className=" "
                  key={item.key}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
