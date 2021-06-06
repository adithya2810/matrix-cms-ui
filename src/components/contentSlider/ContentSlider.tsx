import React from "react";
import { ContentItem } from "@components/contentItem";

export type Props = {
    className?: string
    contentList: Array<any>;
    style: any
};

export const ContentSlider: React.FC<Props> = ({ contentList, className , style={}}) => {
    return (
        <div className={`${className}`} style={style}>
            <div >
                <div>Insight from market disruptors & inventors </div>
                <div></div>
            </div>
            <div className="flex">
                {contentList.map((contentItem) => {
                    return (
                        <ContentItem
                            key={contentItem.content_id}
                            image_url={contentItem.image_url}
                            title={contentItem.title}
                            author={contentItem.author}
                            content_id={contentItem.content_id}
                            content_type={contentItem.content_type}
                            read_duration={contentItem.read_duration}
                            onClick={(id) => console.log(id)}
                            style={{width:610}}
                        />
                    );
                })}
            </div>
        </div>
    );
};
