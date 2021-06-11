import React from 'react';
import { NavItem } from '@components';
import useMediaQuery from '@helper/useMediaQuery';

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
    <div className="home-content-side-nav-container">
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

const ContentTab: React.Fc<Props> = (props) => {
  const isBreakpoint = useMediaQuery(650);
  return !isBreakpoint ? <ContentTabsDeskTop {...props} /> : <div>Mobile</div>;
};

export default ContentTab;
