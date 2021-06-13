import React from 'react';
import { Image } from '@components';
import Button from '@components/button/PrimaryButtonIconRight';
import getContentTypeImageUrl from '../../../utils/getContentTypeImageUrl';
import { classNames } from '@utils/index';

export type Props = {
  image_url: string;
  title: string;
  author: string;
  onClick: (id: string) => void;
  content_id: string;
  content_type: string;
  read_duration: string;
  style?: any;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
};

export const ContentItem: React.FC<Props> = ({
  image_url,
  className = '',
  title,
  author,
  onClick,
  content_id,
  content_type,
  read_duration,
  imageClassName = '',
  contentClassName = '',
  style = {},
}) => {
  return (
    <div className={`${className} relative mb-11 ml-0`} style={style}>
      <Image
        src={image_url}
        alt="content-image"
        className={classNames(imageClassName, 'content-item-image')}
      />
      <div
        className={classNames(
          'content-item-desc bg-secondary-light absolute top-4 p-3',
          contentClassName
        )}
        style={{ top: 40, left: 185 }}
      >
        <h5 className="text-lg font-medium leading-6 text-primary-dark ml-2 p-0.5">
          {title}
        </h5>
        <div className="flex justify-between ml-2 pl-0.5 pt-0.5">
          <span className="font-normal text-xs leading-3  text-primary-dark opacity-50">
            BY {' ' + author}
          </span>
          <span className="font-normal text-xs leading-3  text-primary-dark opacity-50 mr-1">
            {read_duration + ' READ'}
          </span>
        </div>
        <div className="flex justify-between mt-3">
          {/* <button onClick={() => onClick(content_id)} /> */}
          <Button
            title={'Read More'}
            className="h-8 w-36 text-accent"
            url="/icons/rightArrowGray.svg"
          />
          <Image
            src={getContentTypeImageUrl(content_type)}
            alt="content type image"
            className="mr-1"
          />
        </div>
      </div>
    </div>
  );
};
