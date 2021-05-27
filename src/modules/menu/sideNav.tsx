import React from "react";
import { navMenu } from "../../../constants";
import { Image } from "@components"

export const SideNav: React.FC = () => {
    return (<div className="relative -inset-y-0 z-30 bg-primary-dark text-secondary object-left-bottom " style={{ marginTop: 143, width: 548 ,paddingLeft:82 , paddingTop:61}}>
        <div>
            <div>
                {navMenu.primary.map((menuItem: any) => {
                    return (<div key={menuItem.key} className="flex justify-between menu-primary-nav-text" style={{marginBottom:25}}>
                        <span className="menu_primary_nav_text">{menuItem.name}</span>
                        {/* <Image src="/icons/rightArrow.large.svg" alt="image" className="menu_primary_nav_icon"  /> */}
                        <span className="menu_primary_nav_icon" > {">"} </span>
                    </div>)

                })}
            </div>

            <div>
                {navMenu.primary.map((menuItem: any) => {
                    return (<div key={menuItem.key} className="flex justify-between" style={{marginBottom:21}}>
                        <span className="menu_secondary_nav_text">{menuItem.name}</span>
                        <span className="menu_secondary_nav_icon" > {">"} </span> 
                    </div>)

                })}
            </div>
        </div>
        <div>
            <h6>NEVER MISS OUT AN UPDATE </h6>
            <p>Sign up to our newsletter to be updated with how unique *people around the world are creating a difference</p>
            <input />

            <div>

            </div>
        </div>
    </div>)
}