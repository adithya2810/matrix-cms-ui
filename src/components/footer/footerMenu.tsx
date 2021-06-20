import React from "react";
import menu from "../../../constants/footerMenu";


const FooterMenu: React.FC = () => {
  return (<div className="sm:grid sm:grid-cols-2 sm:gap-y-0.5  bg-primary   sub-h2 laptop:flex laptop:items-center laptop:pl-56 ">
    {
      menu.map((item: any, index: number) => {
        return (<span key={index} className="p-1.5">
          <a href={item.link} className="text-secondary h-14 p-0.5 mr-11 leading-4.5"> {item.name}</a>
        </span>)
      })
    }
  </div>)
}

export default FooterMenu;
