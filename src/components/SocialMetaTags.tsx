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
      <link rel="icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_APP_URL}/favicon.ico`}></link>
      <meta name="author" content="author" />

      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:author" content="matrix_team" /> */}

      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:site" content="@matrixindiavc" />
      <meta property="twitter:creator" content="@author" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} /> */}
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
