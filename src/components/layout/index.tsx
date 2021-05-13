import { Footer } from "@components/footer";
import Router from "next/router";

import { Header } from "@components/header";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

type LayoutProps = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  token?: string;
  categories: any[];
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  deviceType: { mobile, tablet, desktop }
}) => {
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
    NProgress.configure({ showSpinner: false });
  }, []);

  return (
    <div className="flex flex-col h-screen w-full h-full">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
