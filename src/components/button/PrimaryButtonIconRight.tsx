import React from "react";

export type Props = {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  url: string;
  onClick?: () => void;
  className?: string;
  style?: any;
  arrowClass?: string;
};

const Button: React.FC<Props> = ({
  type = 'button',
  title,
  url,
  onClick,
  className = "",
  style = {},
  arrowClass = ""
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`flex p-0.5 pl-0 items-center mt-2 ${className}`}
    >
      {" "}
      {title} <img className={`pl-2 ${arrowClass}`} src={url}></img>
    </button>
  );
};

export default Button;
