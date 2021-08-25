import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import Careers from "../../src/modules/careers/careers";

function CareersPage(props) {
  return (<>
    <SocialMetaTags title="Career" image={`${process.env.NEXT_PUBLIC_APP_URL}/img/advisory-banner.png`} description="Matrix partners india job opportunities browse through the job lists" />
    <Careers {...props} />
  </>);
}

export default CareersPage;
