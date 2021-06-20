import React, { FC } from 'react';
import Card from './Card';

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
};

const List: FC<propsType> = (props) => {
  return (
    <div className="section grid grid-cols-1 laptop:grid-cols-2 gap-12 sm:gap-4">
      {data.map((d, i) => (
        <Card key={i} {...props} />
      ))}
    </div>
  );
};

export default List;
