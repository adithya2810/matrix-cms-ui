import React from "react";
import ContentItem from "@components/contentItem/contentItemWithTags";

export type Props = {
  contentList: Array<any>;
};

const HomeContentList: React.FC<Props> = ({ contentList }) => {
  return (
    <div className="overflow-auto home-content-container grid grid-cols-1">
      {contentList.map((content, index) => {
        return <ContentItem {...content} key={index} />;
      })}
    </div>
  );
};

export default HomeContentList;
