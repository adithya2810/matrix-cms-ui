import React from 'react';
import { ContentItem } from '@components/contentItem';
import { classNames } from '@utils/index';

export type Props = {
  className?: string;
  contentList: Array<any>;
  style?: any;
  header: any;
  contentListClassName?: string;
  contentItemClassName?: string;
};

export const ContentSlider: React.FC<Props> = ({
  contentList,
  className,
  header,
  style = {},
  contentListClassName = '',
  contentItemClassName = '',
}) => {
  return (
    <div className={`${className} w-auto`} style={style}>
      <div>
        <div>{header}</div>
      </div>
      <div
        className="content-slider-list overflow-auto w-full"
        style={{ marginTop: 24 }}
      >
        <div
          className={classNames(contentListClassName, 'flex')}
          style={{ width: 800 }}
        >
          {contentList.map((contentItem) => {
            return (
              <ContentItem
                key={contentItem.content_id}
                image_url={contentItem.image_url}
                title={contentItem.title}
                author={contentItem.author}
                content_id={contentItem.content_id}
                content_type={contentItem.content_type}
                read_duration={contentItem.read_duration}
                onClick={(id) => console.log(id)}
                className={classNames(
                  'content-slider',
                  contentItemClassName,
                  'mr-3 mt-2 text-lg leading-6'
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
