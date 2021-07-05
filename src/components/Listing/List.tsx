import React, { FC, useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios'
import { useRouter } from 'next/router'

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  pageType: String;
  deviceType: deviceType;
};

const List: FC<propsType> = (props) => {
  const router = useRouter();
  const [current, setCurrent] = useState(Number(router.query.page) - 1);
  const [card, setCard] = useState([]);
  useEffect(() => {
    debugger
    const params = {
      _start: current ? current * 2 : 0,
      _limit: 2
    }
    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos', { params }).then(res => {
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
