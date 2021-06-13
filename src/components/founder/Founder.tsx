import React from 'react';
import { Image } from '@components';
import { TagList } from 'src/modules/menu/tagList';

export type Props = {
  names: Array<any>;
  background_url: string;
  tags: Array<any>;
  logo_url: string;
  className?: string;
  style?: any;
};

type tagsProps = {
  tags: Array<any>;
};

const RenderTags = (tags) => {
  const arr = [];
  for (let i = 0; i < tags.length; i++) {
    if (i !== 0) {
      arr.push(<span key={i} className="founder-tags-seperator"></span>);
    }
    arr.push(
      <span
        key={tags[i].key}
        className="text-secondary font-medium text-lg leading-6"
      >
        {tags[i].name}
      </span>
    );
  }
  return arr;
};

export const Founder: React.FC<Props> = ({
  className,
  style = {},
  background_url,
  names,
  tags,
  logo_url,
}) => {
  return (
    <div className={`${className} founder-container`} style={style}>
      <div className="founder-background"></div>
      <div className="founder-content">
        <Image
          src={background_url}
          alt="founder image"
          className="founder-image"
        ></Image>
        <Image
          src="/icons/rectangle.svg"
          alt={'reactangle'}
          className="founder-timer"
        />

        <div className="founder-footer-container">
          <div className="founder-name-container flex flex-col justify-center items-start founder-name-text">
            {names.map((name) => {
              return name.styled;
            })}
          </div>

          <div className="flex justify-between items-center founder-tags-container">
            <div className="h-full flex items-center">{RenderTags(tags)}</div>
            <Image
              src={logo_url}
              alt={'company-logo'}
              className="founder-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
