import React from "react";

export type Props = {
    selected: boolean;
    title: string;
    id: string;
    onClick: (string) => void
}


export const Tag: React.FC<Props> = ({ selected, title, id, onClick }: Props) => {
    const className = selected ? "tag-selected" : "tag";
    return (<span className={className} onClick={() => onClick(id)}>
        {title}
    </span>)
}