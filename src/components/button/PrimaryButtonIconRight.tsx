import React from "react";

export type Props = {
  title: string;
  url: string;
  onClick?: () => void;
  className?: string;
  style?: any;
};

const Button: React.FC<Props> = ({
  title,
  url,
  onClick,
  className = "",
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`flex p-0.5 pl-0 items-center mt-2 ${className}`}
    >
      {" "}
      {title} <img className="pl-2" src={url}></img>
    </button>
  );
};

export default Button;
