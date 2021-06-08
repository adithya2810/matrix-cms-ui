import React from "react";

export type Props = {
    src: string;
    alt: string;
    className?: string;
    height?: number;
    width?: number;
    style?: any
}

export const Image: React.FC<Props> = ({ src, alt, className , width, height , style={} }) => {
    return <img src={src} alt={alt} className={className} height={height} width={width} style={style} ></img>
}
