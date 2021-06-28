import React from "react";
import { ContentItem } from "@components";
import { SecondaryButton } from "@components/button/SecondaryButton";

export type Props = {
  blogData?: Array<any>;
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

export const ContentList: React.FC<Props> = ({ blogData }) => {

  return (<div className="ml-20 mt-14 flex-grow sm:hidden">
    <div className="flex justify-between">
      <div className="mb-3">
        <span className="font-light text-3xl leading-8 tracking-tighter text-primary"> {"RELEVANT CONTENT"} </span>
        <span className="ml-5 pl-1 text-accent">{blogData.length}</span>
      </div>

      <SecondaryButton title="View All RESULTS" className=" mr-6 text-accent-dark" />
    </div>
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
            onClick={(id) => console.log(id)}
          />)
        })
      }
    </div>

  </div>)
}
