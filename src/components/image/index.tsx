import React from "react";

export type Props = {
    src: string;
    alt: string;
    className: string;
}

export const Image: React.FC<Props> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} ></img>
}
