import React, { useRef } from "react";
import { ContentItem } from "@components/contentItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

export type Props = {
  className?: string
  contentList: Array<any>;
  style?: any,
  header: any;
  slidesToShow?: any;
  mobile: boolean;
};

export const ContentSliderFeatureTwo: React.FC<Props> = ({ contentList, className, header, slidesToShow, style = {}, mobile }) => {

  const sliderTwo = React.useRef<Slider>(null);

  var settings;
  settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: false,
    fade: false,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    slickGoTo: 1,
    afterChange: (state) => afterChangeHandler(state),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          infinite: true,
        }
      }
    ]
  };

  function afterChangeHandler(currentSlide) {
    // console.log(contentList.length - 2.5, currentSlide)
    if (currentSlide == contentList.length - 2.5) {
      var link = document.getElementById('featureTwoBlog');
      for (var i = 0; i < 100; i++)
        link.click();
    }
  }

  return (

    <div className={`${className}`} style={style}>
      <div >
        <div className="contentItemHeader pb-2">{header}</div>
        <div></div>
      </div>
      <div>
        <Slider ref={sliderTwo} {...settings}>
          {contentList.map((contentItem) => {
            return (
              <ContentItem
                key={contentItem.content_id}
                image_url={contentItem.image_url}
                title={contentItem.title}
                author={contentItem.author}
                content_id={contentItem.content_id}
                content_type={contentItem.content_type}
                read_duration={contentItem.read_duration}
                blog_url={contentItem.blog_url}
                onClick={(id) => console.log(id)}
                style={{ width: 610 }}
                className="mr-3 mt-2 text-lg leading-6"
                mobile={mobile}
              />
            );
          })}
        </Slider>
      </div>
      <button id="featureTwoBlog" className="button" onClick={() => sliderTwo?.current?.slickGoTo(0, false)}></button>
      <Link href="/matrixmoments"><a className="absolute right-7 bottom-2 text-base text-accent font-medium" style={{ fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>See more
        {/* <img className="pl-2 " style={{ display: 'flex' }} src="/icons/rightArrowGray.svg"></img> */}
      </a></Link>
    </div >
  );
};
