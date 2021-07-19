import React, { FC, useState } from 'react';
import Link from 'next/link'
import { Markup } from 'interweave';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
  imageurl: any;
  extratag: any;
  createdAt: any;
  title: string;
  body: string;
  id: any;
  slug: any;
};

const Card: FC<propsType> = (props) => {
  // const url = 'news/' + props.title.split(' ').join('-')
  const url = 'news/' + props.slug
  return (

    <div className="laptop:flex">
      <div className="self-start relative flex-shrink-0 w-90 sm:w-full sm:ml-3 news-images-body" >
        <img
          className="image-shadow"
          width="100%"
          src={props.imageurl}
          alt="image"
        />
        {props.extratag && <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">
          {props.extratag}
        </div>}
      </div>
      <div
        className=" p-4 sm:p-4 relative mt-12 -left-9 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-2 sm:mb-2">{props.createdAt.slice(0, 10)}</div>
        <div className="sub-h2">{props.title}</div>
        <p className="caption news-body">
          <Markup content={props.body.slice(0, 200)} />
          {/* // {props.body.slice(0, 200)} */}
        </p>
        <div className="read-or-hide">
          {<Link href={url}>Read More </Link>}
        </div>
      </div>
    </div>
  );
};

export default Card;
