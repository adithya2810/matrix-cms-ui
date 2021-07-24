import React, { FC } from 'react';
import Card from './Card';

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  data: [any] | null;
  deviceType: deviceType;
};

const List: FC<propsType> = (props) => {
  return (
    <div className="section grid grid-cols-1 laptop:grid-cols-2 gap-6 sm:gap-4 mr-6 sm:mr-0">
      {props.data?.map((d) => (
        <Card key={d.id} deviceType={props.deviceType} data={d} />
      ))}
    </div>
  );
};

export default List;
