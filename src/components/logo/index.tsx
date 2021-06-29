import React from "react";
import { Image } from "@components";

export const Logo: React.FC = () => {

 const siteLogo = '/icons/matrixLogo.svg';

  return (
    // <Image src="/icons/matrixLogo_White.svg" alt="nextjs" width="156.19px" height="65px" className="company-logo" />
    <Image src={siteLogo} alt="nextjs" height="65" width="156" className="company-logo noMargin" />
  );
};
