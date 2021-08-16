import React, { useEffect, useState } from "react";
import { SideNav } from "./sideNav";
import { Tag, Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import { ContentList } from "./ItemCard";
import { TagList } from "./tagList";
import { useQuery, useReactiveVar } from "@apollo/client";
import { appConfigMutation, appConfiqQuery } from "../../../operations/appConfig";
import { appConfigVar } from "../../../models/AppConfig"
import { MobileMenu } from './mobileMenu';
import { navMenu } from "../../../constants";

const tagList = [{
  title: "Education",
  id: "education"

},
{
  title: "Edtech",
  id: "edtech"
},
{
  title: "Consumer",
  id: "consumer"
},
{
  title: "D2C",
  id: "d2c"
},
{
  title: "Fintech",
  id: "fintech"
}
  , {
  title: "Gaming",
  id: "gaming"
}, {
  title: "social",
  id: "social"
}, {
  title: "Communication",
  id: "communication"
}, {
  title: "Marketplaces",
  id: "marketplaces"
}, {
  title: "Mobile",
  id: "Mobile"
}
]

type propType = {
  mobile: boolean;
}

export const Menu: React.FC<propType> = ({ mobile }) => {

  const [sectorialList, setsectorialList] = useState([]);
  const [nonSectorialList, SetNonSectorialList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);
  const [newsInfoList, setNewsInfoList] = useState([]);
  const [eventInfoList, setEventInfoList] = useState([])

  useEffect(() => {
    if (menuIndex == 2) {
      getReleventBlogs(selectedTag);
    }
  }, [selectedTag])


  const onChangeMenu = (menuType, menuID, index) => {
    setMenuIndex(index)
    setsectorialList([]);
    SetNonSectorialList([]);
    setBlogData([]);
    setNewsInfoList([]);
    setEventInfoList([]);

    if (menuID == "footer_blog" && menuType == "PRIMARY_MENU") {
      getTagList();
      getReleventBlogs(selectedTag);
    } else if (menuID == "footer_media" && menuType == "SECONDARY_MENU") {
      getEventInfo();
      getNewsInfo();
    } else if (menuID == "footer_news" && menuType == "SECONDARY_MENU") {
      getNewsInfo();
    } else if (menuID == "footer_event" && menuType == "SECONDARY_MENU") {
      getEventInfo();
    }

    if (menuID != "footer_blog" && menuType == "PRIMARY_MENU") {
      let navItemIndex = navMenu.primary.findIndex(a => a.key == menuID);
      if (navItemIndex < 0) return;
      let navPageLink = navMenu.primary[navItemIndex].link;
      location.href = navPageLink;
    }

    if (menuID != "footer_media" && menuType == "SECONDARY_MENU") {
      let navItemIndex = navMenu.secondary.findIndex(a => a.key == menuID);
      if (navItemIndex < 0) return;
      let navPageLink = navMenu.secondary[navItemIndex].link;
      location.href = navPageLink;
    }
  }

  const intialValue = () => {
    setsectorialList([]);
    SetNonSectorialList([]);
    setBlogData([]);
    setNewsInfoList([]);
    setEventInfoList([]);
    setMenuIndex(-1)
  }


  const getTagList = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags');
    const json = await response.json();
    const sectorialTags = json.filter(tag => tag.sectorial)
      .map(tag => {
        if (tag.sectorial) {
          return {
            title: tag.name,
            id: tag.id,
            slug: tag.slug
          }
        }
      });
    const nonSectorialTags = json.filter(tag => !tag.sectorial)
      .map(tag => {
        if (!tag.sectorial) {
          return {
            title: tag.name,
            id: tag.id,
            slug: tag.slug
          }
        }
      })
    setsectorialList(sectorialTags);
    SetNonSectorialList(nonSectorialTags);
  }

  const getSelectedTag = (id) => {
    // console.log(id)
    if (selectedTag.indexOf(id) > -1) {
      setSelectedTag(selectedTag.filter(item => item != id));
    } else {
      setSelectedTag([...selectedTag, id])
    }
  }

  const getReleventBlogs = async (selectedTag) => {
    let url; let param;
    let filterSectSlug = sectorialList.filter(tag => selectedTag.indexOf(tag.id) > -1)
      .map(tag => { return tag.slug });
    let filterNonSectSlug = nonSectorialList.filter(tag => selectedTag.indexOf(tag.id) > -1)
      .map(tag => { return tag.slug });
    if (selectedTag.length == 0) {
      // url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags'
      url = {
        query: `query {
          blogs (sort: "published_at:desc"){
            _id
            displaytag
            author {
              designation
              image_url
              name
              slug
            }
            content_type {
              name
              slug
            }
            cover_desktop
            cover_image_mobile
            name
            readtime
            slug
            tags {
              _id
              name
              slug
            }
            youtube_embed
          }
      }`};
    } else if (selectedTag.length > 0) {
      // param = filterSectSlug.concat(filterNonSectSlug).join('&slug=')
      // url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?slug=' + param;
      url = {
        query: `query ($tags: JSON){
          blogs (sort: "published_at:desc", where:$tags){
            _id
            displaytag
            author {
              designation
              image_url
              name
              slug
            }
            content_type {
              name
              slug
            }
            cover_desktop
            cover_image_mobile
            name
            readtime
            slug
            tags {
              _id
              name
              slug
            }
            youtube_embed
          }
      }`, variables: { tags: { tags: { slug_in: filterSectSlug.concat(filterNonSectSlug) } } }
      };
    }

    const response = await fetch(`http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/graphql`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url)
    });

    const json = await response.json();
    // console.log('rrr', json)
    const blogList = json.data.blogs.map(blog => {
      return {
        image_url: blog.cover_desktop,
        title: blog.name,
        author: blog.author[0].name || "",
        content_id: blog._id,
        content_type: blog.type,
        read_duration: blog.readtime,
        blog_url: blog.slug
      }
    });
    // const blogList = json.data.filter(blogData => blogData.blogs.length > 0)
    //   .map(blogData => {
    //     return {
    //       image_url: blogData.blogs[0].cover_desktop,
    //       title: blogData.blogs[0].name,
    //       author: blogData.blogs[0].author.name || "",
    //       content_id: blogData.blogs[0].id,
    //       content_type: blogData.blogs[0].type,
    //       read_duration: blogData.blogs[0].readtime,
    //       blog_url: blogData.blogs[0].slug
    //     }
    //   });
    // console.log(json.filter(blogData => blogData.blogs.length > 0));
    setBlogData(blogList);
  }

  const getNewsInfo = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/infos?_sort=date:desc');
    const json = await response.json();

    const newsList = json.map(news => {
      return {
        title: news.title,
        created_date: news.createdAt,
        image_url: news.imageurl,
        blog_url: `/news/${news.slug}`
      }
    });
    setNewsInfoList(newsList);
  }

  const getEventInfo = async () => {
    const response = await fetch('http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/events?_sort=Event_date:desc');
    const json = await response.json();

    const eventList = json.map(event => {
      return {
        title: event.name,
        created_date: event.createdAt,
        image_url: event.cover_image_url,
        blog_url: `/events/${event.slug}`
      }
    });
    setEventInfoList(eventList);
  }

  const { data: { appConfig: navMenuState } } = useQuery(appConfiqQuery.GET_NAV_MENU_STATE);

  // console.log(navMenuState);

  const className = navMenuState.menu ? "visible" : "invisible"
  return (
    <div className={`siteMenuOuterWrap bg-secondary z-30 overflow-hidden   flex  w-full flex-grow absolute top-0 ${className}`}>

      <div className="siteMenuWrapper flex justify-between bg-secondary-light flex-grow">
        <div>
          <a href="/home"><Image src="/icons/matrixLogo.svg" alt="company logo" className="company-logo" /></a>
          <div className="menuCloseButton mt-11  items-center self-end pt-2 hidden lg:flex" onClick={() => appConfigMutation.toogleMenu()}>
            <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
            <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-8 sm:mr-6 text-blue" alt="close menu"></Image>
          </div>
        </div>
        {(sectorialList.length > 0 || nonSectorialList.length > 0) &&
          <div className="sm:hidden menu-tags flex-grow pl-24" style={{ marginLeft: 263 }}>
            <TagList title="SECTORAL" tagList={sectorialList} className="mt-28 pr-11 opacity-100" selectedTags={selectedTag} onItemClick={getSelectedTag} hrefSts={false} />

            <TagList title="NON-SECTORAL" tagList={nonSectorialList} className="pr-11 opacity-100" selectedTags={selectedTag} onItemClick={getSelectedTag} hrefSts={false} />
          </div>
        }
        {(sectorialList.length > 0 || nonSectorialList.length > 0 || blogData.length > 0) &&
          <div className="flex-grow flex flex-col">
            <div className="menuCloseButton mt-11 flex items-center self-end pt-2" onClick={() => appConfigMutation.toogleMenu()}>
              <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
              <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-8 sm:mr-6 text-blue" alt="close menu"></Image>
            </div>
            <ContentList mobile={mobile} blogData={blogData} isNewsEvent={false} header={"RELEVANT CONTENT"} page_url={'/blogs'} />
            <Button
              title={"Visit " + "Blog Page"}
              className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
              url="/icons/rightArrowGray.svg"
              onClick={() => { location.href = '/blogs' }}
            />
          </div>
        }

        {sectorialList.length == 0 && nonSectorialList.length == 0 && newsInfoList.length == 0 && eventInfoList.length == 0 &&
          <div className="sm:hidden menuNotSelected flex-grow pl-12">
            <div className="menuCloseButton mt-11 flex items-center justify-end" onClick={() => appConfigMutation.toogleMenu()}>
              <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
              <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-8 sm:mr-6 text-blue" alt="close menu"></Image>
            </div>
            <h1>Select our <br></br>
              options to<br></br>
              explore the<br></br>
              content :)</h1>
          </div>
        }

        {newsInfoList.length > 0 &&
          <div className="fsm:hidden flex-grow flex flex-col ml-24 newsEventDivider">
            <ContentList mobile={mobile} blogData={newsInfoList} isNewsEvent={true} header={"NEWS"} page_url={'/news'} />
            <Button
              title={"View " + "News page"}
              className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
              url="/icons/rightArrowGray.svg"
              onClick={() => location.href = '/news'}
            />
          </div>
        }

        {eventInfoList.length > 0 &&
          <div className="flex-grow flex flex-col">
            <div className="menuCloseButton mt-11 flex items-center self-end pt-2" onClick={() => appConfigMutation.toogleMenu()}>
              <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
              <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-8 sm:mr-6 text-blue" alt="close menu"></Image>
            </div>
            <ContentList mobile={mobile} blogData={eventInfoList} isNewsEvent={true} header={"EVENTS"} page_url={'/events'} />
            <Button
              title={"View " + "Events page"}
              className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent"
              url="/icons/rightArrowGray.svg"
              onClick={() => location.href = '/events'}
            />
          </div>
        }

      </div>


      <div className="siteMenu-mobileWrapper">
        <MobileMenu
          sectorialList={sectorialList}
          nonSectorialList={nonSectorialList}
          blogData={blogData}
          selectedTags={selectedTag}
          newsInfoList={newsInfoList}
          eventInfoList={eventInfoList}
          onItemClick={getSelectedTag}
          closeMenu={intialValue}
          mobile={mobile}
        >

        </MobileMenu>
      </div>
      <SideNav menuIndex={menuIndex} onMenuClicked={(menuType, menuId, index) => onChangeMenu(menuType, menuId, index)} />
    </div >
  );
};

