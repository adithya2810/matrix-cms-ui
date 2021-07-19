import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { Markup } from 'interweave';

const Details: FC = (props) => {
  const router = useRouter();
  const slug = router.query.newsId;
  const [newsdata, setNewsdata] = useState([]);
  useEffect(() => {
    const params = {
      slug: slug
    }

    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos', { params }).then(res => {
      setNewsdata(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='news-container'>
      <Link href='/news'>Go back</Link>
      <p className="news-header">
        {newsdata[0]?.title}
      </p>
      <p className='news-description'>
        <Markup content={newsdata[0]?.body} />
        {/* {$(newsdata[0]?.body)} */}
      </p>
      <div className='tags-block'>
        <p>TAGS</p>
        <div className='row'>

          <div style={{ flex: '40%' }}>
            <p className='tags-caption'>SECTORIAL</p>
            <div className='tags-list'>
              <div><span>Education</span><span>Edtech</span><span>Consumer</span><span>D2C</span><span>Fintech</span></div>
              <div><span>Gaming</span><span>Social</span><span>Communication</span><span>Marketplaces</span></div>
            </div>
            <p className='tags-view-more'>View More</p>
          </div>
          <div style={{ flex: '40%' }}>
            <p className='tags-caption'>NON-SECTORIAL</p>
            <div className='tags-list'>
              <div><span>Funding</span><span>Investors</span><span>Culture</span><span>Leadership</span><span>Growth</span></div>
              <div><span>News & Announcements</span><span>Brand & Branding</span><span>Metrics</span></div>
            </div>
            <p className='tags-view-more'>View More</p>
          </div>
          <div style={{ flex: '25%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
