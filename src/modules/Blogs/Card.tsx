import React, { FC } from 'react';
import Icon from '@components/Icon';
import { useRouter } from 'next/router';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  data: any;
  deviceType: deviceType;
};

const Card: FC<propsType> = (props) => {
  const { push } = useRouter()
  return (
    <div className="laptop:flex">
      <div className="self-start cursor-pointer relative flex-shrink-0 w-90 sm:w-full sm:ml-2" onClick={_ => push(`/blogs/${props.data?.slug}`)}>
        <img
          style={!props.deviceType?.mobile ? { height: 255, width: 315 } : { height: 'auto', width: '100%' }}
          className="image-shadow"
          width="100%"
          src={!props.deviceType?.mobile ? props.data?.cover_desktop : props.data?.cover_image_mobile}
          alt="image"
        />
        {
          props.data?.displaytag &&
          <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">
            {props.data?.displaytag}
          </div>
        }
      </div>
      <div
        className=" p-8 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-4 sm:mb-2">{`${props.data?.readtime?.toUpperCase()}`} READ</div>
        <div className="sub-h1">{props.data?.name}</div>
        <div className="flex mt-6 mb-6 items-center">
          <span className='flex items-center mr-10 w-8 h-10 sm:absolute sm:top-0 sm:-right-8 sm:mr-0'>
            <Icon {...props} iconType={props.data?.type} />
          </span>
          <div className="flex">
            <img
              className="mr-6 sm:w-8"
              src={props.data?.author?.[0]?.image_url}
              alt="profile-pic"
              style={!props.deviceType?.mobile ? { height: 48, width: 48, borderRadius: 50 } : { height: 27, width: 27, borderRadius: 50 }}
            />
            <div>
              <p className="sub-h2 text-accent-dark">{props.data?.author?.[0]?.name}</p>
              <p className="caption">{props.data?.author?.[0]?.designation}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {
            props.data?.tags?.map(tag => <div className="caption px-6 py-3 sm:px-2 sm:py-2" style={{ background: 'rgba(0, 0, 0, 0.08)' }} >{tag.name?.toUpperCase()}</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
