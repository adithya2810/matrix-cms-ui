import React from "react";
import { ContentItem } from "@components";


const data = [
    {
        image_url: "/icons/content1.svg",
        title: "From both sides of the table : Kunal Bahl unplugged",
        author: "TARUN DAVDA",
        content_id: "abcdef",
        content_type: "blog",
        read_duration: "4 MIN"
    },
    {
        image_url: "/icons/content1.svg",
        title: "From both sides of the table : Kunal Bahl unplugged",
        author: "TARUN DAVDA",
        content_id: "abcdef",
        content_type: "blog",
        read_duration: "4 MIN"
    }
]

export const ContentList: React.FC = () => {

    return (<div className="ml-20 mt-14 flex-grow">
        <div>
            <div className="mb-3">
                <span className="font-light text-3xl leading-8 tracking-tighter text-primary"> ALL CONTENT </span>
                <span className="ml-5 pl-1">{"(3200)"}</span>
            </div>
            <div className="mt-4 flex-grow overflow-auto">
                {
                    data.map((contentItem) => {
                       return( <ContentItem
                            image_url={contentItem.image_url}
                            title={contentItem.title}
                            author={contentItem.author}
                            content_id={contentItem.content_id}
                            content_type={contentItem.read_duration}
                            read_duration={contentItem.content_type}
                            onClick={(id) => console.log(id)}
                        />)
                    })
                }
            </div>
        </div>
    </div>)
}
