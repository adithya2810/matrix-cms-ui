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

const founder_data = {
  names: [
    {
      styled: (
        <span className="font-bold">
          BHAVISH <span className="font-normal">AGGARWAL</span>
        </span>
      ),
    },
  ],
  background_url: '/icons/Bhavish_image.svg',
  tags: [
    { name: 'Mobility', key: 'mobility' },
    { name: 'Electric Cars', key: 'electric-cars' },
  ],
  logo_url: '/icons/ola.svg',
};

const founder_data_cloudnine = {
  names: [
    {
      styled: (
        <span className="font-bold">
          ROHIT <span className="font-normal">M.A.</span>
        </span>
      ),
    },
  ],
  background_url: '/icons/rohit.jpg',
  tags: [{ name: 'Healthcare', key: 'mobility' }],
  logo_url: '/icons/Cloudninelogo.svg',
};

const founder_stanga_living = {
  names: [
    {
      styled: (
        <span className="font-bold">
          ANINDYA <span className="font-normal">DUTTA</span>
        </span>
      ),
    },
    {
      styled: (
        <span className="font-bold">
          SANDEEP <span className="font-normal">DALMIA</span>
        </span>
      ),
    },
  ],
  background_url: '/icons/founder3.png',
  tags: [{ name: 'Student Housing Platform', key: 'student-housing-platform' }],
  logo_url: '/icons/founder3logo.svg',
};

const five_star = {
  names: [
    {
      styled: (
        <span className="font-bold">
          MR. <span className="font-normal"> LAKSHIPATHY</span>
        </span>
      ),
    },
  ],
  background_url: '/icons/founder4.jpg',
  tags: [
    { name: 'Fintech', key: 'mobility' },
    { name: 'NBFC', key: 'nbfc' },
  ],
  logo_url: '/icons/founder4logo.svg',
};

const founderList = [
  founder_data,
  founder_data_cloudnine,
  founder_stanga_living,
  five_star,
];

const _quoteList = [
  {
    quote: (
      <>
        <div key="123456">We are </div>{' '}
        <span key="6789" className="text-accent">
          founders
        </span>{' '}
        <div key="13456">first</div>
      </>
    ),
    key: 0,
  },
  {
    quote: (
      <span key="abcd">
        We <span className="text-accent">partner</span> closely
      </span>
    ),
    key: 1,
  },
  {
    quote: (
      <span key="abcaa">
        We <span className="text-accent">invest</span> early
      </span>
    ),
    key: 2,
  },
  {
    quote: (
      <span key="aba">
        We <span className="text-accent">commit</span> personally
      </span>
    ),
    key: 3,
  },
];

const HomeFounder = () => {
  const [founderIndex, setFounderIndex] = React.useState(3);
  const founder = founderList[founderIndex];
  return (
    <div className="home-founder-container">
      <Founder
        className="home-founder-image-container flex-shrink"
        {...founder}
      />
      <div className="home-founder-carousal-container">
        <FounderQuotesCarousal
          quotesList={_quoteList}
          currentQuoteIndex={founderIndex}
          onItemClick={(index) => {
            console.log(index);
            setFounderIndex(index);
          }}
        />
        <ContentSlider
          contentList={data}
          className={classNames(
            'home-founder-content-slider-container',
            'text-primary-dark'
          )}
          header={
            <span>
              Insights from market{' '}
              <span className="text-accent"> disruptors & investors</span>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default HomeFounder;
