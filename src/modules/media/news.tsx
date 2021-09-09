import React, { FC, ReactNode, useEffect, useState } from 'react';
import AppliedFilters from '@components/Listing/AppliedFilters';
import List from '@components/Listing/List';
import Pagination from '@components/Listing/Pagination';
import Filters from '@components/Listing/Filters';
import { useRouter } from 'next/router';
import axios from 'axios';
import qs from "qs";

type deviceType = {
  mobile: boolean;
};

type propsType = {
  pageType: string;
  deviceType: deviceType;
};

const MediaNews: FC<propsType> = (props) => {
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
      const { tags, search } = router.query;
      if (tags) {
        params['tags.slug'] = tags;
        countParam['tags.slug'] = tags;
      }
      if (search) {
        params['_where'] = { _or: [{ title_contains: search }, { "tags.name_contains": search }] };
        countParam['_where'] = { _or: [{ title_contains: search }, { "tags.name_contains": search }] };
      }
    }
    let qparams = qs.stringify(params);
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/infos?${qparams}`).then(res => {
      setCard(res.data)
    }).catch(err => {
      console.log(err);
    });

    let qparamsCount = qs.stringify(countParam);
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/infos/count?${qparamsCount}`).then(res => {
      setCount(Math.ceil(res.data / 10))
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="listing">
      <AppliedFilters {...props} total={count} />
      <List {...props} cards={card} />
      <Filters {...props} />
      <Pagination {...props} total={count} />
    </div>
  );
};

export default MediaNews;
