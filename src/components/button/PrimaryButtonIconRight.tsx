import React from "react";

export type Props = {
    title: string;
    url: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<Props> = ({ title, url, onClick , className}: Props) => {
    return (

        <button onClick={onClick} className={`flex p-0.5 pl-0 items-center mt-2 ${className}`}> {title} <img className="pl-2" src={url}></img></button>
    )
}


export default Button;