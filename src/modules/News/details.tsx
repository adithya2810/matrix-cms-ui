import React, { FC } from 'react';
import Link from 'next/link'

const Details: FC<{ newsdata: any; tags: any[] }> = ({ newsdata, tags }) => {
  return (
    <div className='news-container'>
      <Link href='/news'>Go back</Link>
      <h1 className="news-header pb-10 sm:pt-5 sm:pb-5" style={{ color: '#000000', fontSize: 65, lineHeight: '80px', fontWeight: 700 }}>
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
