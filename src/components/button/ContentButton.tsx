import React from "react";

export type Props = {
    className?: string;
    onClick?: () => void;
    title: string;
    textClassName?: string;
}
export const ContentButton: React.FC<Props> = ({ className = "", title, onClick ,textClassName=""}) => {
    return (<div className={`${className} relative`} >
        <div className={`bg-blue absolute h-full w-full`}>
        </div>
        <div className={`absolute ml-1 -mt-1.5 h-full w-full flex justify-center`} style={{
            background: "#FBF9F5",
            border: "1px solid #007BFF",
            boxSizing: "border-box",
            textAlign:"center"
        }}><span className={`font-normal text-xs leading-6 text-blue flex items-center ${textClassName}`}>{title}</span></div>
    </div>)
}