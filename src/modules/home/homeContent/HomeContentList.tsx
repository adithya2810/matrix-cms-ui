import React from "react";
import ContentItem from "@components/contentItem/contentItemWithTags";

export type Props = {
  contentList: Array<any>;
};

// const data = {
//   image_url: "/icons/homeContentImage.svg",
//   image_caption: "MOST SEARCHED",
//   title: "Redefining wellness , one mosaic at a time",
//   author: "Sanjot Malhi",
//   designation: "Director",
//   author_image_url: "/icons/profileImage.svg",
//   content_id: "abcdef",
//   content_type: "blog",
//   read_duration: "4 MIN",
//   tags: [
//     {
//       title: "LEADERSHIP",
//       id: "leadership",
//     },
//   ],
// };

const HomeContentList: React.FC<Props> = ({ contentList }) => {
  return (
    <div className="overflow-auto home-content-container">
      {contentList.map((content) => {
        return <ContentItem {...content} />;
      })}
    </div>
  );
};

export default HomeContentList;
