import { Footer } from "@components/footer";
import Router from "next/router";

import { Header } from "@components/header";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { Menu } from "../../modules/menu";

type LayoutProps = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  token?: string;
  toggle? : ()=>void,
  visiblity: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  deviceType: { mobile, tablet, desktop },
  visiblity,
  toggle
}) => {
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
    NProgress.configure({ showSpinner: false });
  }, []);
  const className = visiblity? "visible" : "invisible";
  return (
    <div className={`flex flex-col w-full h-full ${className}`}>
      <Header toggle={toggle}/>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
