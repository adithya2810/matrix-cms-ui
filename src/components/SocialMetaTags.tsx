import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const SocialMetaTags: React.FC<Props> = ({ url, title, description, image }) => {
  /**
   *
   * @param str html string input
   * @returns return only string not html code
   */
  const strip_html_tags = (str) => {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  };

  /**
   *
   * @param str long string
   * @param strip (optional) if string have html then pass true
   * @returns return small string length for description
   */
  const makeDescription = (str, strip = false) => {
    if (strip) str = strip_html_tags(str);
    return str.slice(0, 160);
  };

  url = url ? `${process.env.NEXT_PUBLIC_APP_URL}${url}` : process.env.NEXT_PUBLIC_APP_URL;
  title = title ? `${title} - Matrix Partners India` : 'Matrix Partners India';
  description = description ? makeDescription(description, true) : "We work with visionary founders of early-stage startups to amplify their intrinsic talent.";
  image = image ? image : `${process.env.NEXT_PUBLIC_APP_URL}/Matrix_Primary_Logo.png`
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_APP_URL}/favicon.ico`}></link>

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      {/* <meta name="og:image:width" content="512" />
      <meta name="og:image:height" content="512" /> */}
      {/* <meta name="og:author" content="matrix_team" /> */}

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      {/* <meta name="twitter:site" content="@matrixindiavc" />
      <meta name="twitter:creator" content="@author" /> */}
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="text/javascript" async src="https://www.google-analytics.com/analytics.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119875117-1"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-119875117-1');`}} />
    </Head>
  )
};

export default SocialMetaTags;
