import React from "react";


export type Props = {
    title: string;
    onClick?: () => void;
    className?: string
}

export const SecondaryButton: React.FC<Props> = ({ title, onClick, className }) => {
    return (<button className={`text-lg leading-6 font-medium underline text-accent-dark  ${className}`} > {title}</button>);
}