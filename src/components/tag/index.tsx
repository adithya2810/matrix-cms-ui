import React from "react";

export type Props = {
    selected: boolean;
    title: string;
    id: string;
    onClick: (string) => void;
    className?: string;
}


export const Tag: React.FC<Props> = ({ selected, title, id, onClick, className="" }: Props) => {
    const _className = selected ? "tag-selected" : "tag";
    return (<span className={_className + " " + className} onClick={() => onClick(id)}>
        {title}
    </span>)
}