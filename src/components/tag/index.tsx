import Link from 'next/link';
import React from "react";

export type Props = {
  selected: boolean;
  title: string;
  id: string;
  onClick?: (string) => void;
  className?: string;
  style?: any;
}


export const Tag: React.FC<Props> = ({ selected, title, id, onClick, className = "", style = {} }: Props) => {
  const _className = selected ? "tag-selected" : "tag";
  return (<Link href={`/blogs?tags.slug=${id}`}><a>
    <span className={className + " " + _className} style={style} onClick={() => { if (onClick) onClick(id) }}>
      {title}
    </span>
  </a>
  </Link>)
}
