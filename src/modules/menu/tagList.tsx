import React from "react";
import { Tag } from "@components";


export type Props = {
    title: string;
    tagList: any;
    selectedMap: Map<string, boolean>
    onItemClick: (id) => void
}

export const TagList: React.FC<Props> = ({ title, tagList, onItemClick, selectedMap }: Props) => {

    return (
        <div>
            <div>{title}</div>
            <div>
                {
                    tagList.map((tag) => {
                        return (<Tag id={tag.id} title={tag.title} selected={selectedMap.has(tag.id)} onClick={() => {
                            onItemClick(tag.id)
                        }} />)
                    })
                }
            </div>
        </div>
    )
}