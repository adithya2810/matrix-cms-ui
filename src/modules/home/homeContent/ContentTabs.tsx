import React from "react";

import { NavItem } from "@components"


const homeContentTabs = [
    {
        name: "Blogs",
        id: "blogs",
        link: ""
    },
    {
        name: "Podcast",
        id: "blogs",
        link: ""
    },
    {
        name: "VideoCasts",
        id: "blogs",
        link: ""
    }
]

export const ContentTabs = () => {
    return (
        <div>
            {
                homeContentTabs.map(({ name, id, link }) => {
                    return (
                        <NavItem key={id} title={name} id={id} onClick={() => console.log("clicked")} selected />
                    )
                })
            }
        </div>
    )
}