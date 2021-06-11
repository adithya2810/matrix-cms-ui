import React from "react";
import Image from "next/image";

export type Props = {
  height? : number;
  width? : number;
  className? : string;
}

export const Logo: React.FC<Props> = ({height=65,width=156,className=""}) => {
  return (
    <Image  src="/icons/matrixLogo.svg" alt="nextjs" width={width} height={height} className={`${className}company-logo`}/>
  );
};
