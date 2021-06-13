import React from 'react';

export type Props = {
  quotesList?: Array<any>;
  currentQuoteIndex?: number;
  onItemClick?: (index: number) => void;
};

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
    key: 1,
  },
  {
    quote: (
      <span>
        We <span className="text-accent">partner</span> closely
      </span>
    ),
    key: 2,
  },
  {
    quote: (
      <span>
        We <span className="text-accent">invest</span> early
      </span>
    ),
    key: 3,
  },
  {
    quote: (
      <span>
        We <span className="text-accent">commit</span> personally
      </span>
    ),
    key: 4,
  },
];

const FounderQuotesCarousal: React.FC<Props> = ({
  quotesList = _quoteList,
  currentQuoteIndex = 0,
  onItemClick,
}) => {
  const renderQuoteList: any = () => {
    let j: number = 0;
    let arr = [];
    for (let i = currentQuoteIndex; j < quotesList.length; j++) {
      if (i === currentQuoteIndex) {
        arr.push(quotesList[i].quote);
      } else {
        arr.push(
          <div
            key={i}
            className="flex home-founder-quotes-text-inactive items-start"
            onClick={() => onItemClick(i)}
            style={{ marginTop: 92, minWidth: 160 }}
          >
            <div className="relative">
              <span className="home-founder-carousal-index absolute left-0 top-0 text-xs leading-3.5">
                0{i + 1}
              </span>
              <span className="">{quotesList[i].quote}</span>
            </div>
          </div>
        );
      }

      ++i;
      i = i % quotesList.length;
    }
    return arr;
  };
  return (
    <div className=" justify-between">
      <div className="flex flex-wrap float-right bg-gradient-to-r home-founder-quotes-text">
        {renderQuoteList()}
      </div>
    </div>
  );
};

export default FounderQuotesCarousal;
