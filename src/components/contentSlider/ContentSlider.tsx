import React, { useRef } from "react";
import { ContentItem } from "@components/contentItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type Props = {
  className?: string
  contentList: Array<any>;
  style?: any,
  header: any;
  slidesToShow?: any,
  mobile: boolean;
};

export const ContentSlider: React.FC<Props> = ({ contentList, className, header, slidesToShow, style = {}, mobile }) => {

  const slider = React.useRef<Slider>(null);

  var settings;
  settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: false,
    fade: false,
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1.5,
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
    if (currentSlide == contentList.length - slidesToShow) {
      var link = document.getElementById('featureOneBlog');
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
        <Slider ref={slider} {...settings}>
          {contentList.map((contentItem) => {
            return (
              <ContentItem
                key={contentItem.content_id}
                image_url={contentItem.image_url}
                title={contentItem.title}
                author={contentItem.author}
                content_id={contentItem.content_id}
                content_type={contentItem.content_type.name}
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
      <button id="featureOneBlog" className="button" onClick={() => slider?.current?.slickGoTo(0, false)}></button>
    </div>
  );
};
