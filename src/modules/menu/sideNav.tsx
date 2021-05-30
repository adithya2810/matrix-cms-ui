import React from "react";
import { navMenu } from "../../../constants";
import { NavItem, Image } from "@components";
import { socialMedia } from "../../../constants/socialMedia";
import Button from "@components/button/PrimaryButtonIconRight";



export const SideNav: React.FC = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const isSelected = (index: number) => {
        if (index == selectedIndex) return true;
        else false;
    }

    return (<div className="z-30 absolute -bottom-0 bg-accent-dark text-secondary  flex flex-col justify-between" style={{ marginTop: 143, width: 548, paddingLeft: 82, paddingTop: 61, height: 824 }}>
        <div className="block">
            <div>
                {navMenu.primary.map((menuItem: any, index) => {
                    return (
                        <NavItem title={menuItem.name} className={!isSelected(index) ? "opacity-50" : "opacity-100"} key={menuItem.key} id={menuItem.key} onClick={() => setSelectedIndex(index)} selected={!isSelected(index)} />
                    )
                })}
            </div>

            <div>
                {navMenu.secondary.map((menuItem: any) => {
                    return (<div key={menuItem.key} className="flex justify-between" style={{ marginBottom: 21 }}>
                        <h5 className="menu-secondary-nav-text">{menuItem.name}</h5>
                        <span className="menu-secondary-nav-icon" > {">"} </span>
                    </div>)

                })}
            </div>
        </div>
        <div className=" mr-16">
            
            <span className="ml-4">
                <h6 className="font-medium text-3xl  mt-4">Let's stay engaged </h6>
                <h6 className="sub-h2 font-normal text-xs leading-3 capitalize pt-1 pb-1">Sign up for the Matric Moments series</h6>
                <input className="mt-2 text-secondary bg-accent p-0.5 pl-3 w-full" style={{ color: "#FBF9F5" }} type="email" placeholder="Your email address goes here" />
                <Button title="Subscribe" url="/icons/arrow.svg" onClick={() => console.log("subscribe")} />
            </span>
            <div className="flex mt-7">
                {
                    socialMedia.map((item) => {
                        return (<a className="p-1 mr-10 mb-9" href={item.link}>
                            <Image src={item.imageUrl} alt={item.name} className=" " key={item.key} />
                        </a>)
                    })
                }
            </div>
        </div>
    </div>)
}