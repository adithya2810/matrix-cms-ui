import React from "react";
import App, { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { appWithTranslation } from "@i18n";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "helper/apollo";

export default function  ExtendedApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

  return { ...appProps, userAgent, query };
};

