import React, { FC } from 'react';
import Icon from './Icon';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
};

const Card: FC<propsType> = (props) => {
  return (
    <div className="laptop:flex">
      <div className="self-start relative flex-shrink-0 w-90 sm:w-full sm:ml-3">
        <img
          className="image-shadow"
          width="100%"
          src={'/images/image.png'}
          alt="image"
        />
        <div className="sub-h2 py-1.5 px-3 bg-accent text-white absolute laptop:bottom-0 left-0 sm:top-0">
          Pined
        </div>
      </div>
      <div
        className=" p-8 sm:p-4 relative mt-8 -left-6 w-full sm:left-0 sm:mt-0 sm:-top-16 sm:-ml-2"
        style={{
          background: 'white',
          width: props.deviceType?.mobile ? '93%' : '100%',
        }}
      >
        <div className="caption text-accent-dark mb-4 sm:mb-2">4 MIN READ</div>
        <div className="sub-h1">Redefining wellness, one mosaic at a time</div>
        <div className="flex mt-6 mb-6 items-center">
          <Icon {...props} iconType={'mic'} />
          <div className="flex">
            <img
              className="mr-6 sm:w-8"
              src="/images/circlePic.png"
              alt="video"
            />
            <div>
              <p className="sub-h2 text-accent-dark">Avnish Bajaj</p>
              <p className="caption">Founder & Managing Director</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div
            className="caption px-6 py-3 sm:px-2 sm:py-2"
            style={{ background: 'rgba(0, 0, 0, 0.08)' }}
          >
            LEADERSHIP
          </div>
          <div
            className="caption px-6 py-3 sm:px-2 sm:py-2"
            style={{ background: 'rgba(0, 0, 0, 0.08)' }}
          >
            HEALTHTECH
          </div>
          <div
            className="caption px-6 py-3 sm:px-2 sm:py-2"
            style={{ background: 'rgba(0, 0, 0, 0.08)' }}
          >
            D2C
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
