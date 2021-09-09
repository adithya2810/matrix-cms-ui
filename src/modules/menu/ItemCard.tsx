import React from "react";
import { NewsEventContentItem } from "@components";
import { SecondaryButton } from "@components/button/SecondaryButton";
import { Image } from "@components";
import Button from "@components/button/PrimaryButtonIconRight";
import getContentTypeImageUrl from "@utils/getContentTypeImageUrl";
import Link from 'next/link';

export type Props = {
  blogData: Array<any>;
  isNewsEvent: boolean;
  header: string;
  newsEventData?: Array<any>
  page_url?: string;
  mobile: boolean;
  total?: number;
}

export const ContentList: React.FC<Props> = ({ blogData, header, isNewsEvent, newsEventData, page_url, mobile, total }) => {
  return (<div className="ml-8 flex-grow sm:hidden seperator">
    <div className="flex justify-between ">
      <div className="mb-3">
        <span className="font-light text-2xl leading-8 tracking-tighter text-primary"> {header} </span>
        <span className="ml-2 pl-1 text-accent">({total ? total : blogData.length})</span>
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
              mobile={mobile}
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
};


export type CardProps = {
  image_url: string;
  title: string;
  author: string;
  onClick: (id: string) => void;
  content_id: string;
  content_type: string;
  read_duration: string;
  blog_url: string;
  style?: any;
  className?: string;
  mobile: boolean;
};

export const ContentItem: React.FC<CardProps> = ({
  image_url,
  className = "",
  title,
  author,
  blog_url,
  onClick,
  content_id,
  content_type,
  read_duration,
  style = {},
  mobile
}) => {
  const capitalize = (str) => {
    if (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        if ((/[a-zA-Z]/).test(words[i].charAt(0))) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      return words.join(" ");
    }
    return '';
  };

  const contentRead = (type) => {
    let cntarr = { Video: 'Watch', Audio: 'Listen', Article: 'Read' }
    return cntarr[type] || "Read";
  };

  return (
    <div className={`${className} relative mb-8 ml-0`} style={style} >
      <div className="relative hover-cover-div">
        <div className="itemCoverImage" style={{ backgroundImage: `url(${image_url})` }}>
          <a href={`/matrixmoments/${blog_url}`} style={{ display: 'block', width: '100%', height: '100%' }}></a>
        </div>
        <div className="cover-hover"></div>
      </div>
      <div className="content-item-desc bg-secondary-light absolute p-3 pb-1"
        style={mobile ? {} : { bottom: "-1rem", left: "7.5rem" }}
      >
        <h5 className="text-sm font-medium leading-6 text-primary-dark ml-2" style={mobile ? { fontSize: 15, lineHeight: '20px', WebkitBoxOrient: 'unset' } : { lineHeight: '24px' }}>
          <a href={`/matrixmoments/${blog_url}`}>{title}</a>
        </h5>
        <div className="flex justify-between ml-2 pt-1">
          <span className="font-normal text-xs leading-3 text-primary-dark opacity-50" style={{ lineHeight: '14px', letterSpacing: 1 }}>
            By {" " + capitalize(author)}
          </span>
          <span className="read_duration font-normal uppercase text-xs leading-3  text-primary-dark opacity-50 mr-1" style={mobile ? { fontSize: 11, fontWeight: 500 } : { lineHeight: '14px' }}>
            {read_duration + " "}{contentRead(content_type)}
          </span>
          {mobile && <Image
            src={getContentTypeImageUrl(content_type)}
            alt="content type image"
            className="mr-1"
            style={{ width: 30, height: 16 }}
          />}
        </div>
        {!mobile &&
          <div className="flex ml-2 justify-between mt-2 contentButtonWrap" >
            <Link href={`/matrixmoments/${blog_url}`}>
              <a className="flex p-0.5 pl-0 items-center mt-2 h-7 w-36 text-accent text-base" style={{ fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>
                Read More
                <img className="pl-2" src="/icons/rightArrowGray.svg" />
              </a>
            </Link>
            <Image
              src={getContentTypeImageUrl(content_type)}
              alt="content type image"
              className="mr-1 mt-2"
              style={{ width: 33, height: 20 }}
            />
          </div>
        }
      </div>
    </div>
  );
};
