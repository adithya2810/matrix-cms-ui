import React, { FC, ReactNode, useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import AppliedFilters from './AppliedFilters';
import List from './List';
import Pagination from './Pagination';
import Filters from './Filters';
import { useRouter } from 'next/router';
import axios from 'axios';

type deviceType = {
  mobile: Boolean;
};

type propsType = {
  title: ReactNode;
  pageType: String;
  deviceType: deviceType;
};

const index: FC<propsType> = (props) => {
  const router = useRouter();
  const [current, setCurrent] = useState(Number(router.query.page) || 1);
  const [card, setCard] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let countParam: any = {};
    let params = {
      _sort: "date:DESC",
      _start: current ? (current - 1) * 10 : 0,
      _limit: 10
    }
    if (router.query) {
      const { tags } = router.query;
      params['tags.slug'] = tags;
      countParam['tags.slug'] = tags;
    }
    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos', { params }).then(res => {
      setCard(res.data)
    }).catch(err => {
      console.log(err);
    });
    params = countParam;
    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos/count', { params }).then(res => {
      setCount(Math.ceil(res.data / 10))
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="listing">
      <HeroSection {...props} />
      <AppliedFilters {...props} total={count} />
      <List {...props} cards={card} />
      <Filters {...props} />
      <Pagination total={count} />
    </div>
  );
};

export default index;
