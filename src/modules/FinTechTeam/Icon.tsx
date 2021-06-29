import { ArticleLaptop, MicMobile } from '@components/Icons';
import React from 'react';

const MobileIcons = {
  mic: <MicMobile />,
};
const LaptopIcons = {
  mic: <ArticleLaptop />,
};

const Icon = ({ deviceType, iconType }) => {
  if (deviceType.mobile) return MobileIcons[iconType];
  else return LaptopIcons[iconType];
};
export default Icon;
