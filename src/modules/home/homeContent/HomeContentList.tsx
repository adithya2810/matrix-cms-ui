import React from "react";
import ContentItem from "@components/contentItem/contentItemWithTags";

export type Props = {
  contentList: Array<any>;
  mobile: boolean;
};

const HomeContentList: React.FC<Props> = ({ contentList, mobile }) => {
  return (
    <div className="overflow-auto home-content-container grid grid-cols-1" style={{ paddingTop: 0, paddingBottom: 0, margin: '40px 0' }}>
      {contentList.map((content, index) => {
        return <ContentItem mobile={mobile} {...content} key={index} />;
      })}
    </div>
  );
};

export default HomeContentList;
