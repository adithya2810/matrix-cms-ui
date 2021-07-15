import React, { FC, useState } from 'react';
import Link from 'next/link'
type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
  cover_image_url: any;
  createdAt: any;
  name: string;
  slug: string;
  description: string;
  id: any;
};

const Card: FC<propsType> = (props) => {
  const url = 'events/' + props.slug
  return (

    <div className="laptop:flex">
      <div className="self-start relative flex-shrink-0 w-90 sm:w-full sm:ml-3" style={{ width: '35%' }} >
        <img style={{ height: '150px', minWidth: '100%' }}
          className="image-shadow"
          src={props.cover_image_url}
          alt="image"
        />
        <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">Pined</div>
      </div>
      <div
        className="p-4 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-2 sm:mb-2">{props.createdAt.slice(0, 10)}</div>
        <div className="sub-h2">{props.name}</div>
        <p className="caption news-body">
          {props.description.slice(0, 200)}
        </p>
        <div className="read-or-hide">
          <Link href={url}>Read More </Link>
          {/* <img src='/icons/arrow_b.svg' /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
