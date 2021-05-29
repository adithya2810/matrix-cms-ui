import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Image src="/icons/matrixLogo.svg" alt="nextjs" width="187" height="78" className="company-logo" />
  );
};
