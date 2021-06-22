import React from 'react';

export type Props = {
  quotesList?: Array<any>;
  currentQuoteIndex?: number;
  onItemClick?: (index: number) => void;
};

const FounderQuotesCarousal: React.FC<Props> = ({
  quotesList,
  currentQuoteIndex,
  onItemClick,
}) => {
  const renderQuoteList: any = () => {
    let j: number = 0;
    let arr = [];
    for (let i = currentQuoteIndex; j < quotesList.length; j++) {
      console.log(i, quotesList[i].key);
      if (i === currentQuoteIndex) {
        arr.push(quotesList[i].quote);
      } else {
        let index = i;
        arr.push(
          <div
            key={i}
            className="flex home-founder-quotes-text-inactive items-start"
            onClick={(event) => {
              onItemClick(index);
            }}
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
      i++;
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
