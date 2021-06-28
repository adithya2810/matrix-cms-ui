import React from "react";
import ContentTabs from "./ContentTabs";
import ContentList from "./HomeContentList";

const homeContentTabs = [
  {
    name: "Blogs",
    id: "blogs",
    link: "",
  },
  {
    name: "Podcast",
    id: "podcast",
    link: "",
  },
  {
    name: "VideoCasts",
    id: "videocasts",
    link: "",
  },
];

const contentList = [{}, {}, {}, {}, {}];

const HomeContent: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState<string | null>(
    homeContentTabs[0].id
  );

  const onTabSelected = (id: string) => {
    setSelectedTab(id);
  };

  return (
    <div
      className="flex"
      style={{ marginLeft: 80, height: 1400, marginBottom: 107 }}
    >
      <ContentTabs
        tabList={homeContentTabs}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
      <ContentList contentList={contentList} />
    </div>
  );
};

export default HomeContent;
