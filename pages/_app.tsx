import React from 'react';
import App, { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '@styles/global.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'helper/apollo';
import { useDeviceType } from 'helper/useDeviceType';
import { Root } from '../src/modules/root';
// import Head from "next/head";


export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
}): JSX.Element {
  const apolloClient = useApollo(pageProps);
  const deviceType = useDeviceType(userAgent);

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <ApolloProvider client={apolloClient}>
        <Root deviceType={deviceType}>
          <Component {...pageProps} deviceType={deviceType} />
        </Root>
      </ApolloProvider>
    </>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return { ...appProps, userAgent, query };
};
