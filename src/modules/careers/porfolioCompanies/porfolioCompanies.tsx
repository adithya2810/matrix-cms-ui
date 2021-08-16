import React from "react";
import RoleTabs from "./roleTabs";
import RoleDescription from '../roleDescription/roleDescription';
import Link from 'next/link';

const roleContentTabs = [
  {
    role: "Executive Assistant",
    city: "(Delhi - Aerocity)",
    id: "1",
    desc: "grdgtdght",
  },
  {
    role: "Executive Assistant",
    city: "(Delhi - Aerocity)",
    id: "2",
    desc: "",
  },
  {
    role: "Executive Assistant",
    city: "(Bangalore - MG Road)",
    id: "3",
    desc: "egregergregre",
  },
];

const contentList = [{}, {}, {}, {}, {}];

const RolesContent: React.FC<{ mobile: boolean; }> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState<string | null>(
    roleContentTabs[0].id
  );

  const onTabSelected = (id: string) => {
    setSelectedTab(id);
  };

  return (
    <div className="grid grid-cols-7 pt-20 mx-20 sm:mx-0 sm:pt-10 sm:px-10">
      <RoleTabs {...props} tabList={roleContentTabs} selectedTab={selectedTab} onTabSelected={onTabSelected} />
      <div className="md:hidden sm:hidden team-member cursor-pointer col-span-5" style={{ paddingTop: 10, marginBottom: 100, }}>
        <RoleDescription deviceType={{ mobile: props.mobile }} />
      </div>
    </div>
  );
};

export default RolesContent;
