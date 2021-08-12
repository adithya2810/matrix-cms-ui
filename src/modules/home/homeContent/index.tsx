import React, { useState, useEffect } from "react";
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
    name: "Videocasts",
    id: "videocasts",
    link: "",
  },
];

const contentList = [{}, {}, {}, {}, {}];

const HomeContent: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  // const fetch("http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?FeaturedOne=1")


  const [selectedTab, setSelectedTab] = React.useState<string | null>(
    homeContentTabs[0].id
  );

  const [contentList, SetContentList] = useState([])

  useEffect(() => {
    componentDidMount();
  }, [selectedTab]);

  const onTabSelected = (id: string) => {
    setSelectedTab(id);
  };

  const componentDidMount = async () => {
    let url;
    if (selectedTab == "blogs") {
      url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?content_type.name=Article';
    } else if (selectedTab == "podcast") {
      url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?content_type.name=Audio';
    } else if (selectedTab == "videocasts") {
      url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/blogs?content_type.name=Video';
    }
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    const featureData = json.map(blogData => {
      return {
        image_url: blogData.cover_desktop || "/icons/homeContentImage.svg",
        image_caption: "MOST SEARCHED",
        title: blogData.name,
        author: blogData.author[0]?.name || "Sanjot Malhi",
        designation: blogData.author[0]?.designation || "Director",
        author_image_url: blogData.author[0]?.image_url || "/icons/profileImage.svg",
        content_id: blogData.id || "",
        content_type: blogData?.type || "Video",
        read_duration: blogData.readtime,
        blog_url: blogData.slug || '',
        tags: blogData.tags.map(tag => {
          return {
            title: tag.name,
            id: tag.id,
            slug: tag.slug
          }
        }),
      }
    })
    // console.log(featureData);
    SetContentList(featureData)
  }

  return (
    <div className="homeContentSection-Outer">
      <div className="page-center">
        <div className="flex homeContentSection-Inner" style={{ height: 1000, marginBottom: 80 }}>
          <ContentTabs
            tabList={homeContentTabs}
            selectedTab={selectedTab}
            onTabSelected={onTabSelected}
            mobile={mobile}
          />
          <ContentList contentList={contentList} mobile={mobile} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
