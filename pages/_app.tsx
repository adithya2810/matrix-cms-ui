import React from "react";
import App, { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "helper/apollo";
import { Layout } from "@components/layout";
import { useDeviceType } from "helper/useDeviceType";
import { Menu } from "../src/modules"

export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
}): JSX.Element {
  const deviceType = useDeviceType(userAgent);
  const apolloClient = useApollo(pageProps);
  const [menu,setMenu]= React.useState(false);

  return (
    <>
      <Layout visiblity={!menu} deviceType={deviceType} toggle={()=>setMenu(!menu)} >
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} className="invisible"/>
          
        </ApolloProvider>
      </Layout>
      <Menu visiblity={menu} toggle={()=>setMenu(!menu)}/>
    </>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

  return { ...appProps, userAgent, query };
};

