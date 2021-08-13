import { MicLaptop, MicMobile, ArticleLaptop, ArticleMobile, VideoMobile, VideoLaptop } from '@components/Icons';
import React from 'react';

const MobileIcons = {
  Audio: <MicMobile />,
  Video: <VideoMobile />,
  Article: <ArticleMobile />,
};
const LaptopIcons = {
  Audio: <MicLaptop />,
  Video: <VideoLaptop />,
  Article: <ArticleLaptop />,
};

const Icon = ({ deviceType, iconType }) => {
  if (deviceType.mobile) return MobileIcons[iconType] || MobileIcons.Article;
  else return LaptopIcons[iconType] || LaptopIcons.Article;
};
export default Icon;
