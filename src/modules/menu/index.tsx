import React, { useEffect, useState } from "react";
import { SideNav } from "./sideNav";
import { Tag, Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import { ContentList } from "../content/contentList";
import { TagList } from "./tagList";
import { useQuery, useReactiveVar } from "@apollo/client";
import { appConfigMutation, appConfiqQuery } from "../../../operations/appConfig";
import { appConfigVar } from "../../../models/AppConfig"

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


export const Menu: React.FC = () => {

  const [sectorialList, setsectorialList] = useState([]);
  const [nonSectorialList, SetNonSectorialList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null)

  useEffect(() => {
    if (menuIndex == 2) {
      getReleventBlogs(selectedTag);
    }
  }, [selectedTag])


  const onChangeMenu = (index) => {
    setMenuIndex(index)
    if (index == 2) {
      getTagList();
      getReleventBlogs(selectedTag);
    } else {
      setsectorialList([]);
      SetNonSectorialList([]);
      setBlogData([]);
    }
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
      url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags'
    } else if (selectedTag.length > 0) {
      param = filterSectSlug.concat(filterNonSectSlug).join('&slug=')
      url = 'http://ec2-3-108-61-121.ap-south-1.compute.amazonaws.com:1337/tags?slug=' + param;
    }

    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    const blogList = json.filter(blogData => blogData.blogs.length > 0)
      .map(blogData => {
        return {
          image_url: blogData.blogs[0].cover_desktop,
          title: blogData.blogs[0].name,
          author: blogData.blogs[0].author.name || "",
          content_id: blogData.blogs[0].id,
          content_type: blogData.blogs[0].type,
          read_duration: blogData.blogs[0].readtime
        }
      });
    setBlogData(blogList);
  }
  const { data: { appConfig: navMenuState } } = useQuery(appConfiqQuery.GET_NAV_MENU_STATE);

  console.log(navMenuState);

  const className = navMenuState.menu ? "visible" : "invisible hidden"
  return (
    <div className={`siteMenuOuterWrap bg-secondary z-30 overflow-hidden   flex  w-full flex-grow absolute top-0 ${className}`} style={{ height: 1053 }}>
      <div className="siteMenuWrapper flex justify-between bg-secondary-light flex-grow">
        <div>
          <Image src="/icons/matrixLogo.svg" alt="company logo" className="company-logo" />
        </div>
        {(sectorialList.length > 0 || nonSectorialList.length > 0) &&
          <div className="sm:hidden menu-tags flex-grow pl-24" style={{ marginLeft: 263 }}>
            <TagList title="SECTORAL" tagList={sectorialList} className="mt-28 pr-11 opacity-100" selectedTags={selectedTag} onItemClick={getSelectedTag} />

            <TagList title="NON-SECTORAL" tagList={nonSectorialList} className="pr-11 opacity-100" selectedTags={selectedTag} onItemClick={getSelectedTag} />
          </div>
        }
        {(sectorialList.length > 0 || nonSectorialList.length > 0 || blogData.length > 0) &&
          <div className="flex-grow flex flex-col">
            <div className="menuCloseButton mt-11 flex items-center self-end pt-2" onClick={() => appConfigMutation.toogleMenu()}>
              <h6 className="sub-h1 pr-1 menu-text text-accent ">Close</h6>
              <Image src="/icons/menuClose.svg" className="pl-2 laptop:mr-20 sm:mr-6 text-blue" alt="close menu"></Image>
            </div>
            <ContentList blogData={blogData} />
            <Button title={"Visit " + "Blog Page"} className=" sm:hidden menu-content-nav-button ml-20 mb-12 text-accent" url="/icons/rightArrowGray.svg" />
          </div>
        }

        {sectorialList.length == 0 && nonSectorialList.length == 0 &&
          <div className="sm:hidden menuNotSelected flex-grow pl-24" style={{ marginLeft: 263 }}>
            <h1>Select our <br></br>
              options to
              explore the
              content :)</h1>
          </div>
        }

      </div>
      <SideNav onMenuClicked={(index) => onChangeMenu(index)} />
    </div >
  );
};

