import Blogs from '@modules/Blogs/index';
import React, { FC } from 'react';
import SocialMetaTags from '@components/SocialMetaTags';

type deviceType = {
  mobile: boolean;
};

type propsType = {
  deviceType: deviceType;
  filter1: any[];
  filter2: any;
};

const BlogsPage: FC<propsType> = (props) => {
  return (
    <>
      <SocialMetaTags title="All Blogs" />
      <Blogs {...props} />
    </>
  );
};

export async function getServerSideProps() {
  const QUERY_old = {
    query: `query {
      blogTypes (sort: "name:desc"){
        name
        slug
        blogs {
          name
        }
      }
      people (sort: "name:desc"){
        name
        slug
        blogs {
          name
        }
      }
      contents (sort: "name:desc"){
        name
        slug
        blogs {
          name
        }
      }
      tags (sort: "name:desc"){
        name
        slug
        sectorial
        blogs {
          name
        }
      }
  }`};
  const QUERY = {
    query: `query {
      people (sort: "name:desc"){
        name
        slug
        blogs {
          name
        }
      }
      tags (sort: "name:desc"){
        name
        slug
        sectorial
        blogs {
          name
        }
      }
  }`};

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(QUERY)
  });

  const json = await response.json();

  let fltr = [];
  let fltr2 = { tags: [], author: [] };
  for (const key in json.data) {
    if (Object.prototype.hasOwnProperty.call(json.data, key)) {
      const element = json.data[key];
      let f = element.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug }));
      let id = "";
      let name = "";
      if (key == 'blogTypes') {
        id = "moments";
        name = "Matrix Moments"
      }
      // if (key == 'people') {
      //   id = "authors";
      //   name = "Authors"
      // }
      if (key == 'contents') {
        id = "formats";
        name = "Content Formats"
      }
      if (key == 'people') {
        fltr2.author = f;
      } else if (key == 'tags') {
        fltr2.tags = element.map(r => ({ tagName: r.name, tagNumber: r?.blogs?.length || 0, slug: r.slug, sectoral: r.sectorial }));
      } else {
        fltr.push({ id: id, data: f, name: name });
      }
    }
  }

  return {
    props: {
      filter1: fltr,
      filter2: fltr2
    }
  }
}

export default BlogsPage;
