import React from "react";
import menu from "../../../constants/footerMenu";


const FooterMenu: React.FC = () => {
    return (<div className="sm:grid sm:grid-cols-2 sm:gap-2 sm:pl-11 sm:pt-6 bg-primary-dark footer-menu w-full sub-h2 laptop:flex laptop:items-center laptop:pl-56 ">
        {
            menu.map((item: any, index: number) => {
                return (<span>
                    <a href={item.url} className="text-secondary-light h-14 p-0.5 mr-3"> {item.name}</a>
                </span>)
            })
        }
    </div>)
}

export default FooterMenu;