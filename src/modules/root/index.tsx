import React, { useEffect } from "react";
import { Layout } from "@components/layout";
import { Menu } from "../menu";
import { useQuery } from "@apollo/client";
import {
  appConfigMutation,
  appConfiqQuery,
} from "../../../operations/appConfig";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { Footer } from "@components/footer";
import { Header } from "@components/header";

export type Props = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  token?: string;
};

export const Root: React.FC<Props> = ({ children }) => {
  const {
    data: { appConfig: navMenuState },
  } = useQuery(appConfiqQuery.GET_NAV_MENU_STATE);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
    NProgress.configure({ showSpinner: false });
  }, []);
  const className = !navMenuState.menu
    ? "visible"
    : "invisible hidden ";

  return (
    <>
      <div className={`flex flex-col flex-grow w-full h-full  ${className}`}>
        <Header toggle={appConfigMutation.toogleMenu} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <Menu />
    </>
  );
};
