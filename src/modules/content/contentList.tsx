import React from "react";
import { ContentItem, NewsEventContentItem } from "@components";
import { SecondaryButton } from "@components/button/SecondaryButton";

export type Props = {
  blogData: Array<any>;
  isNewsEvent: boolean;
  header: string;
  newsEventData?: Array<any>
  page_url?: string
}

const data = [
  {
    image_url: "/icons/content1.svg",
    title: "From both sides of the table : Kunal Bahl unplugged",
    author: "TARUN DAVDA",
    content_id: "abcdef",
    content_type: "blog",
    read_duration: "4 MIN"
  },
  {
    image_url: "/icons/content1.svg",
    title: "From both sides of the table : Kunal Bahl unplugged",
    author: "TARUN DAVDA",
    content_id: "abcdefg",
    content_type: "blog",
    read_duration: "4 MIN"
  }
]

export const ContentList: React.FC<Props> = ({ blogData, header, isNewsEvent, newsEventData, page_url }) => {

  return (<div className="ml-8 flex-grow sm:hidden seperator">
    <div className="flex justify-between ">
      <div className="mb-3">
        <span className="font-light text-2xl leading-8 tracking-tighter text-primary"> {header} </span>
        <span className="ml-2 pl-1 text-accent">({blogData.length})</span>
      </div>

      <SecondaryButton
        title="View All RESULTS"
        className=" mr-6 text-accent-dark"
        style={{ color: "#37414C" }}
        onClick={() => location.href = page_url}
      />
    </div>
    {!isNewsEvent &&
      <div className="mt-4 flex-grow overflow-auto menuBlogInfoBox">
        {
          blogData.map((contentItem, index) => {
            return (<ContentItem
              key={contentItem.content_id + index}
              image_url={contentItem.image_url}
              title={contentItem.title}
              author={contentItem.author}
              content_id={contentItem.content_id}
              content_type={contentItem.content_type}
              read_duration={contentItem.read_duration}
              blog_url={contentItem.blog_url}
              onClick={(id) => console.log(id)}
            />)
          })
        }
      </div>
    }
    {isNewsEvent &&
      <div className="mt-4 flex-grow overflow-auto menuBlogInfoBox">
        {
          blogData.map((newsEvent, index) => {
            if (index < 5) {
              return (<NewsEventContentItem
                key={index}
                image_url={newsEvent.image_url}
                title={newsEvent.title}
                date={newsEvent.created_date}
                blog_url={newsEvent.blog_url}
                onClick={(id) => console.log(id)}
              />)
            }
          })
        }
      </div>
    }

  </div>)
}
