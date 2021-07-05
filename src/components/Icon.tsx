import { MicLaptop, MicMobile, ArticleLaptop, ArticleMobile, VideoMobile, VideoLaptop } from '@components/Icons';
import React from 'react';

const MobileIcons = {
  Audio: <MicMobile />,
  video: <VideoMobile />,
  article: <ArticleMobile />,
};
const LaptopIcons = {
  Audio: <MicLaptop />,
  video: <VideoLaptop />,
  article: <ArticleLaptop />,
};

const Icon = ({ deviceType, iconType }) => {
  if (deviceType.mobile) return MobileIcons[iconType] || MobileIcons.article;
  else return LaptopIcons[iconType] || LaptopIcons.article;
};
export default Icon;
