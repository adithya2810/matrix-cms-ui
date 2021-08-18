import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Details: FC = (props) => {
  const router = useRouter();
  const slug = router.query.newsId;
  const [newsdata, setNewsdata] = useState(null);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const params = {
      slug: slug
    }

    axios.get('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos', { params }).then(res => {
      setNewsdata(res.data[0])
      if (res.data.length > 0) {
        let sectoral = res.data[0].tags.filter(v => v.sectorial == true);
        let non_sectoral = res.data[0].tags.filter(v => v.sectorial == false);
        if (sectoral.length != 0 || non_sectoral.length != 0) {
          setTags([{ name: 'SECTORIAL', data: sectoral }, { name: 'NON-SECTORIAL', data: non_sectoral }])
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='news-container'>
      <Link href='/news'>Go back</Link>
      <h1 className="news-header pb-10 sm:pt-5 sm:pb-5" style={{ fontSize: 65, lineHeight: '80px', fontWeight: 700 }}>
        {newsdata?.title}
      </h1>

      <div className='blog-content pb-16 text-justify' dangerouslySetInnerHTML={{ __html: newsdata?.body }}></div>

      {tags.length > 0 && <div className='tags-block'>
        <p>TAGS</p>
        <div className='row'>
          {tags.map((tag, i) => tag.data.length > 0 &&
            <div key={i} style={{ flex: '40%' }}>
              <p className='tags-caption'>{tag.name}</p>
              <div className='tags-list'>
                <div>
                  {tag.data.map((v, ii) => <Link href={`/news?tags=${v.slug}`}><a><span key={ii}>{v.name}</span></a></Link>)}
                </div>
              </div>
              {/* <p className='tags-view-more'>View More</p> */}
            </div>
          )}
          <div style={{ flex: '25%' }}></div>
          {/* <div style={{ flex: '40%' }}>
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
          <div style={{ flex: '25%' }}></div> */}
        </div>
      </div>}
    </div>
  );
};

export default Details;
