import React from "react";
import { navMenu } from "../../../constants";
import { NavItem, Image } from "@components";
import { socialMedia } from "../../../constants/socialMedia";



export const SideNav: React.FC = () => {

    const [selectedIndex,setSelectedIndex] = React.useState(0);

    const isSelected = (index : number)=>{
              if(index == selectedIndex) return true;
              else false;
    }
    
    return (<div className="z-30 absolute -bottom-0 bg-primary-dark text-secondary  flex flex-col justify-between" style={{ marginTop: 143, width: 548, paddingLeft: 82, paddingTop: 61 , height:824}}>
        <div className="block">
            <div>
                {navMenu.primary.map((menuItem: any,index) => {
                    return (
                        <NavItem title={menuItem.name} className={!isSelected(index) ? "opacity-50" : "opacity-100"} key={menuItem.key} onClick={() => setSelectedIndex(index)} selected={!isSelected(index)} />
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
            <h6 className="font-medium text-xs leading-3 mt-4">NEVER MISS OUT AN UPDATE </h6>
            <p className="text-lg leading-6 mt-4">Sign up to our newsletter to be updated with how unique *people around the world are creating a difference</p>
            <input className="mt-4 bg-primary" placeholder="Your email address goes here" />
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