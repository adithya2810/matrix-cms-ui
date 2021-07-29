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
  const capitalize = (str) => {
    if (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
      }
      return words.join(" ");
    }
    return '';
  };
  return (
    <div className="laptop:flex">
      <div className="self-start cursor-pointer relative flex-shrink-0 w-90 sm:w-full sm:ml-5 sm:pr-5" onClick={_ => push(`/blogs/${props.data?.slug}`)}>
        <img
          style={!props.deviceType?.mobile ? { height: 178, width: 220 } : { height: 'auto', width: '100%' }}
          className="image-shadow2"
          width="100%"
          src={!props.deviceType?.mobile ? props.data?.cover_desktop : props.data?.cover_image_mobile}
          alt="image"
        />
        {
          props.data?.displaytag &&
          <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0 xs:ml-5">
            {props.data?.displaytag}
          </div>
        }
      </div>
      <div
        className="p-8 pl-7 pr-0 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-4 sm:pl-7"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-1 sm:mb-2 Manrope-normal" style={props.deviceType?.mobile ? { fontWeight: 500, letterSpacing: 0.6, color: 'rgba(8, 58, 74, 1)' } : { fontWeight: 400, color: '#083A4A' }}>{`${props.data?.readtime?.toUpperCase()}`} READ</div>
        <div className="sub-h1 Manrope-normal" style={props.deviceType?.mobile ? { fontWeight: 500, letterSpacing: 1, lineHeight: '20px' } : { fontWeight: 400, fontSize: 24, lineHeight: '34px', color: '#000000', letterSpacing: 1 }}>{props.data?.name}</div>
        <div className="flex mt-3 mb-4 items-center">
          <span className='flex items-center mr-8 w-8 h-10 sm:absolute sm:top-0 sm:-right-8 sm:mr-0'>
            <Icon {...props} iconType={props.data?.type} />
          </span>
          <div className="flex">
            <img
              className="mr-3 sm:w-8"
              src={props.data?.author?.[0]?.image_url}
              alt="profile-pic"
              style={!props.deviceType?.mobile ? { height: 44, width: 44, borderRadius: 50 } : { height: 27, width: 27, borderRadius: 50 }}
            />
            <div>
              <p className="sub-h2 text-accent-dark Manrope-normal capitalize" style={props.deviceType?.mobile ? { lineHeight: '18px', letterSpacing: 1, paddingBottom: 5 } : { lineHeight: '24px', fontSize: 16, color: '#083A4A' }}>{capitalize(props.data?.author?.[0]?.name)}</p>
              <p className="caption Manrope-normal" style={props.deviceType?.mobile ? { fontWeight: 500, fontSize: 11, lineHeight: '14px', letterSpacing: 0.6 } : { fontWeight: 300, letterSpacing: 1, color: '#000000' }}>{props.data?.author?.[0]?.designation}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {
            props.data?.tags?.map(tag => <div key={tag.id} className="caption px-3 py-3 sm:px-2 sm:py-2 Manrope-normal" style={props.deviceType?.mobile ? { fontWeight: 500, fontSize: 11, lineHeight: '14px', letterSpacing: 0.6, background: 'rgba(0, 0, 0, 0.08)', color: 'rgba(0, 0, 0, 0.65)' } : { background: 'rgba(0, 0, 0, 0.08)', fontWeight: 300, color: 'rgba(0, 0, 0, 0.65)', letterSpacing: 1, lineHeight: '10px', fontSize: '11px' }} >{tag.name?.toUpperCase()}</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
