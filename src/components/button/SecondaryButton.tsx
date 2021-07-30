import React from "react";


export type Props = {
  title: string;
  onClick?: () => void;
  className?: string;
  style?: any;
}

export const SecondaryButton: React.FC<Props> = ({ title, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm leading-4 font-medium underline text-accent-dark  ${className}`}
      style={style}
    >

      {title}

    </button>);
}
