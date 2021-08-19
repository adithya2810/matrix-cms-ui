import React, { FC, useState } from 'react';
import Link from 'next/link'
import { Markup } from 'interweave';

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

    <div className="laptopCustom:flex">
      <div className="self-start relative flex-shrink-0 w-90 lg:w-full lg:ml-12 sm:ml-4 listing_card_image_outer" >
        <img style={!props.deviceType?.mobile ? { height: 178, width: 220 } : { height: '220', width: '300' }}
          className="image-shadow"
          src={props.cover_image_url ? props.cover_image_url : '/icons/matrixLogo.svg'}
          alt="image"
        />
        <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptopCustom:bottom-0 left-0 lg:top-0">Pined</div>
      </div>
      <div
        className="p-4 lg:p-4 relative mt-8 -left-6 w-full lg:left-0 lg:mt-0 lg:-top-16 lg:-ml-2 listing_card_content_outer"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-2 lg:mb-2">{props.createdAt.slice(0, 10)}</div>
        <div className="sub-h1 Manrope-normal" style={{ fontWeight: 400, fontSize: '24px', lineHeight: '34px', letterSpacing: '1px' }}>{props.name}</div>
        <p className="font-medium" style={{ color: '#083A4A', fontSize: 13 }} dangerouslySetInnerHTML={{ __html: props.description.replace(/<[^>]+>/g, '').slice(0, 200) }}></p>
        <div className="read-or-hide">
          <Link href={url}><a className="flex">Read More <img className="pl-2 pt-1" src='/icons/arrow_b.svg' /></a></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
