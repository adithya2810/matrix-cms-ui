import React from "react";
import App, { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "helper/apollo";
import { Layout } from "@components/layout";
import { useDeviceType } from "helper/useDeviceType";

export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
}): JSX.Element {
  const deviceType = useDeviceType(userAgent);
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <Layout deviceType={deviceType}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

  return { ...appProps, userAgent, query };
};

