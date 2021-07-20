import React from "react";
import { Image } from "@components";

export type Props = {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
  style?: any
}

export const Logo: React.FC<Props> = ({ src, alt, className, width, height, style = {} }) => {


  const siteLogo = '/icons/matrixLogo.svg';


  return (
    // <Image src="/icons/matrixLogo_White.svg" alt="nextjs" width="156.19px" height="65px" className="company-logo" />
    <Image src={src} alt={alt} width={156} height={65} className={`company-logo noMargin ${className}`} />
  );
};
