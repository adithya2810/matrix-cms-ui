import React, { FC, useState } from 'react';
import Link from 'next/link'
import { Markup } from 'interweave';
import moment from 'moment';
import { useRouter } from 'next/router';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
  imageurl: any;
  extratag: any;
  date: Date;
  title: string;
  body: string;
  id: any;
  slug: any;
};

const Card: FC<propsType> = (props) => {
  const router = useRouter();
  // const url = 'news/' + props.title.split(' ').join('-')
  const url = '/news/' + props.slug
  return (

    <div className="laptopCustom:flex">
      <div className="self-start relative flex-shrink-0 w-90 lg:w-full lg:ml-12 sm:ml-4 listing_card_image_outer" >
        <img style={!props.deviceType?.mobile ? { height: 178, width: 220 } : { height: '220', width: '300' }}
          className="image-shadow news-image cursor-pointer"
          width="100%"
          src={props.imageurl ? props.imageurl : '/icons/matrixLogo.svg'}
          alt="image"
          onClick={() => router.push(url)}
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
        <div className="caption text-accent-dark mb-2 lg:mb-2">{moment(props?.date).format('YYYY-MM-DD')}</div>
        <div className="sub-h1 Manrope-normal" style={{ fontWeight: 400, fontSize: '24px', lineHeight: '34px', letterSpacing: '1px' }}><Link href={url}><a>{props.title}</a></Link></div>
        <p className="caption news-body" style={{ color: '#000000' }} dangerouslySetInnerHTML={{ __html: props.body.slice(0, 200) }}></p>
        <div className="read-or-hide">
          {<Link href={url}><a className="flex">Read More <img className="pl-2 pt-1" src='/icons/arrow_b.svg' /></a></Link>}
        </div>
      </div>
    </div>
  );
};

export default Card;
