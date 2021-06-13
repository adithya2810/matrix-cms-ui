import React from 'react';
import { NavItem } from '@components';
import { MOBILE_BREAKPOINT } from '@constants/index';

export type Props = {
  selectedTab: string;
  onTabSelected?: (id: string) => void;
  tabList: Array<any>;
};

const ContentTabsDeskTop: React.FC<Props> = ({
  selectedTab,
  onTabSelected,
  tabList,
}) => {
  return (
    <div className="home-content-side-nav-container hidden laptop:visible">
      {tabList.map(({ name, id, link }) => {
        const tabStyle =
          id === selectedTab
            ? 'opacity-100  text-accent'
            : 'opacity-40 text-primary-dark';
        return (
          <NavItem
            key={id}
            title={name}
            id={id}
            arrow={false}
            onClick={onTabSelected}
            selected={id === selectedTab}
            className={`w-full font-extralight home-content-tab ${tabStyle}`}
          />
        );
      })}
    </div>
  );
};

// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const ContentTabMobile: React.FC<Props> = ({
  tabList,
  onTabSelected,
  selectedTab,
}) => {
  const menuItems = Menu(tabList, selectedTab);
  return (
    <div className="home-content-side-nav-container hidden sm:visible">
      {menuItems}
    </div>
  );
};

const ContentTab: React.FC<Props> = (props) => {
  //const isBreakpoint = useMediaQuery(MOBILE_BREAKPOINT);
  return (
    <>
      <ContentTabsDeskTop {...props} />
      {/* <ContentTabMobile {...props} /> */}
    </>
  );
};

export default ContentTab;
