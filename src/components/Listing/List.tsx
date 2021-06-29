import React, { FC, useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios'

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
};

const List: FC<propsType> = (props) => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos').then(res => {
      setCard(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className="section grid grid-cols-1 laptop:grid-cols-2 gap-12 sm:gap-4">
      {card.map((d, i) => (
        <Card key={i} {...props} {...d} />
      ))}
    </div>
  );
};

export default List;
