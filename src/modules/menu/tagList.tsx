import React from "react";
import { Tag } from "@components";


export type Props = {
    title: string;
    tagList: any;
    onItemClick: (selected: any) => void;
    className : string;
}

export const TagList: React.FC<Props> = ({ title, tagList, onItemClick,className="" }: Props) => {
    const [selected, setSelected] = React.useState([]);

    const isSelected = (id) => {
        if (selected.indexOf(id) > -1) {
            return true;
        }

        return false;

    }

    const toggle = (id) => {
        if (isSelected(id) === true) {
            const index = selected.indexOf(id);
            setSelected(selected.splice(index+1, 1));
        } else {
            setSelected([...selected, id])
        }
        onItemClick(selected)
    }
    return (
        <div className={`w-full ${className}`}>
            <div className="font-light text-xs leading-3 tracking-wider p-2 text-accent-dark">{title}</div>
            <div className=" flex flex-row flex-wrap text-primary-dark">
                {
                    tagList.map((tag) => {
                        return (<Tag id={title+tag.id} key={tag.id} className="ml-3 mb-3" title={tag.title} selected={isSelected(tag.id)} onClick={() => {
                            toggle(tag.id)
                        }} />)
                    })
                }
            </div>
        </div>
    )
}