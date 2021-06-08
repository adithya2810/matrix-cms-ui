import React from "react";
import ContentItem from "@components/contentItem/contentItemWithTags";

export type Props = {
  contentList: Array<any>;
};

const HomeContentList: React.FC<Props> = ({ contentList }) => {
  return (
    <div className="overflow-auto home-content-container">
      {contentList.map(() => {
        return <ContentItem />;
      })}
    </div>
  );
};

export default HomeContentList;
