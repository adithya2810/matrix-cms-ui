import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image';
import { Markup } from 'interweave';

const Details: FC = (props) => {
  const router = useRouter();
  const slug = router.query.eventsId;
  const [eventsdata, setEventsdata] = useState([]);
  useEffect(() => {
    const params = {
      slug: slug
    }

    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/events', { params }).then(res => {
      setEventsdata(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='event-container'>
      <p className='event-heading-1'>{eventsdata[0]?.name}</p>
      <img src={eventsdata[0]?.cover_image_url} alt="nextjs" />
      <div className='row'>
        <div className='go-back' style={{ flex: '35%' }}>
          <Link href='/events'>Go back</Link>
        </div>
        <div style={{ flex: '65%' }}></div>
      </div>
      <div className='row'>
        <div className='left-event' >
          <div className='event-heading'>{eventsdata[0]?.name}</div>
          <div className='event-grid'>
            <span className='enevt-sub-card'>
              <div><img src="/icons/Vector.svg" alt="nextjs" /></div>
              <span><img src="/icons/Ellipse.svg" alt="nextjs" /></span>
              <span>
                <p className='event-username'>Ankush Goyal</p>
                <p className='event-user-role'>Senior Associate</p>
              </span>
            </span>
            <span className='enevt-sub-card'>
              <div><img src="/icons/Vector.svg" alt="nextjs" /></div>
              <span><img src="/icons/Ellipse.svg" alt="nextjs" /></span>
              <span>
                <p className='event-username'>Ankush Goyal</p>
                <p className='event-user-role'>Senior Associate</p>
              </span>
            </span>
            <span className='enevt-sub-card'>
              <div><img src="/icons/Vector.svg" alt="nextjs" /></div>
              <span><img src="/icons/Ellipse.svg" alt="nextjs" /></span>
              <span>
                <p className='event-username'>Ankush Goyal</p>
                <p className='event-user-role'>Senior Associate</p>
              </span>
            </span>
          </div>
        </div>
        <div className='right-event'>
          <p><Markup content={eventsdata[0]?.description} /></p>
        </div>

      </div>
      {/* <Link href='/news'>Go back</Link>
      <p className="news-header">
        {newsdata[0]?.title}
      </p>
      <p className='news-description'>
        {newsdata[0]?.body}
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
      </div> */}
    </div>
  );
};

export default Details;
