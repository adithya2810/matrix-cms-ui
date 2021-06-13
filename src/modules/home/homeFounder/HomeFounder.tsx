import React from 'react';
import { ContentSlider, Founder } from '@components';
import FounderQuotesCarousal from './FounderQuotesCarousal';
import { classNames } from '@utils/index';

const data = [
  {
    image_url: '/icons/content1.svg',
    title: 'From both sides of the table : Kunal Bahl unplugged',
    author: 'TARUN DAVDA',
    content_id: 'abcdef',
    content_type: 'blog',
    read_duration: '4 MIN',
  },
  {
    image_url: '/icons/content1.svg',
    title: 'From both sides of the table : Kunal Bahl unplugged',
    author: 'TARUN DAVDA',
    content_id: 'abcdefg',
    content_type: 'blog',
    read_duration: '4 MIN',
  },
];

const HomeFounder = () => {
  const [founderIndex, setFounderIndex] = React.useState(0);
  return (
    <div className="home-founder-container">
      <Founder className="home-founder-image-container flex-shrink" />
      <div className="home-founder-carousal-container">
        <FounderQuotesCarousal
          currentQuoteIndex={founderIndex}
          onItemClick={(index) => setFounderIndex(index)}
        />
        <ContentSlider
          contentList={data}
          className={classNames(
            'home-founder-content-slider-container',
            'text-primary-dark'
          )}
          header={
            <span>
              Dive into the <span className="text-accent">Matrix Moments</span>{' '}
              series
            </span>
          }
        />
      </div>
    </div>
  );
};

export default HomeFounder;
