import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import Presskit from "../../src/modules/presskit";


function ContactPage(props) {
  return (<>
    <SocialMetaTags title="Presskit" url={'/presskit'} />
    <Presskit {...props} />
  </>);
}

export default ContactPage;
