import React, { FC, useEffect, useState } from 'react';
import Card from './Card';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  pageType: string;
  deviceType: deviceType;
  cards: any[];
};

const List: FC<propsType> = (props) => {
  return (
    <div className="section grid grid-cols-1 laptop:grid-cols-2 gap-12 sm:gap-4 list_card_outer">
      {props.cards.map((d, i) => (
        <Card key={i} {...props} {...d} />
      ))}
    </div>
  );
};

export default List;
