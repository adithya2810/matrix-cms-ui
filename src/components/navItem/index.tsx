import { title } from "process";
import React from "react";
import { Image } from "@components"

export type Props = {
    title: string;
    id: string;
    onClick: (id: string) => void
    selected: boolean;
    className?: string;
}

export const NavItem: React.FC<Props> = ({ title, selected, id, onClick , className=""}) => {
    return (
        <div className={`flex justify-between menu-primary-nav-text opacity-50 ${className}`} style={{ marginBottom: 25 }} onClick={() => onClick(id)}>
            <span className="menu-primary-nav-text">{title}</span>
            {/* <Image src="/icons/rightArrow.large.svg" alt="image" className="menu_primary_nav_icon"  /> */}
            {selected ? (<span className="menu-primary-nav-icon" > {">"} </span>) : (<Image src={"/icons/sideNavButton.svg"} alt="nav button" className="-mr-5 opacity-100" />)}
        </div>)

}