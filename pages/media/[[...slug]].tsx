import React from 'react';
import SocialMetaTags from '@components/SocialMetaTags';
import { useRouter } from 'next/router';
import Link from "next/link";
import MediaNews from '@modules/media/news';
import MediaEvent from '@modules/media/events';
import PresskitForm from "@modules/presskit/form"

type Props = {
  deviceType: {
    mobile: boolean;
  };
  title: string;
}

const Media: React.FC<Props> = (props) => {
  const { query } = useRouter();
  return (
    <div className="media_page">
      <SocialMetaTags title={props.title} image={`${process.env.NEXT_PUBLIC_APP_URL}/images/matrixMomentsLaptop.png`} />
      <div className="media-hero-section" style={(!query.hasOwnProperty('slug') || query.slug == 'news') ? { backgroundImage: 'url(/images/matrix-websitebanner-media1.jpg)' } : {}}>
        <div className="media-title laptop:ml-40 laptop:mt-20 laptop:mb-12">
          {props.title}
        </div>
        <div className="mediatab">
          <Link href={'/media/news'}><a style={props.deviceType.mobile ? { fontSize: 13, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={(!query.hasOwnProperty('slug') || query.slug == 'news') ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            News
          </a></Link>
          <Link href={'/media/events'}><a style={props.deviceType.mobile ? { fontSize: 13, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={query.slug == 'events' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Events
          </a></Link>
          <Link href={'/media/presskit'}><a style={props.deviceType.mobile ? { fontSize: 13, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 } : {}}
            className={query.slug == 'presskit' ?
              "sm:uppercase btn-active-bg text-white px-8 tab-btn sm:px-2 py-2 text-3md sm:text-sm md:text-2xl focus:outline-none"
              : "sm:uppercase focus:outline-none text-white px-8 tab-btn sm:text-sm sm:px-2 py-2 text-3md md:text-2xl"}>
            Presskit
          </a></Link>
        </div>
      </div>
      {(!query.hasOwnProperty('slug') || query.slug == 'news') && <MediaNews {...props} pageType="media" />}
      {query.slug == 'events' && <MediaEvent {...props} pageType="media" />}
      {query.slug == 'presskit' && <PresskitForm {...props} pageType="media" />}
    </div>
  )
};

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;
  let title;
  if (slug) {
    if (slug == 'news') title = "Matrix in the News";
    if (slug == 'events') title = "Past Events";
    if (slug == 'presskit') title = "Press Enquiries";
  } else {
    title = "Matrix in the News";
  }
  return {
    props: { title }
  }
};

export default Media;
