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

    <div className="laptopCustom:flex">
      <div className="self-start relative flex-shrink-0 w-90 lg:w-full lg:ml-12 sm:ml-4 listing_card_image_outer" >
        <img style={!props.deviceType?.mobile ? { height: 178, width: 220 } : { height: '220', width: '300' }}
          className="image-shadow news-image"
          width="100%"
          src={props.imageurl}
          alt="image"
        />
        {props.extratag && <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptopCustom:bottom-0 left-0 lg:top-0">
          {props.extratag}
        </div>}
      </div>
      <div
        className=" p-4 lg:p-4 relative mt-8 -left-6 w-full lg:left-0 lg:mt-0 lg:-top-16 lg:-ml-2 listing_card_content_outer"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-2 lg:mb-2">{props.createdAt.slice(0, 10)}</div>
        <div className="sub-h1 Manrope-normal" style={{ fontWeight: 400, fontSize: '24px', lineHeight: '34px', letterSpacing: '1px' }}>{props.title}</div>
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
