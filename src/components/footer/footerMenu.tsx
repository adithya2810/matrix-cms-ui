import React from "react";
import menu from "../../../constants/footerMenu";


const FooterMenu: React.FC = () => {
  return (<div className="sm:grid sm:grid-cols-2 sm:gap-y-0.5  bg-primary laptop:flex laptop:items-center ">
    {
      menu.map((item: any, index: number) => {
        return (<span key={index} className="p-1.5">
          <a href={item.link} className="text-secondary h-14 p-0.5 mr-6 leading-4.5"> {item.name}</a>
        </span>)
      })
    }
  </div>)
}

export default FooterMenu;
