import { AppConfig, appConfigVar } from "../../models/AppConfig";
import { ReactiveVar } from "@apollo/client";

const toogleMenu = function (appConfig: ReactiveVar<AppConfig>) {
  return () => {
    const _appConfig = { ...appConfig() };
    _appConfig.menu = !_appConfig.menu;
    appConfig(_appConfig);
  };
};

const setSelectedNavMenu = function (appConfig: ReactiveVar<AppConfig>) {
  return (navMenuId: string | null) => {
    const _appConfig = { ...appConfig() };
    _appConfig.navMenuSelected = navMenuId;
    appConfig(_appConfig);
  };
};

const appConfigMutations = {
  toogleMenu: toogleMenu(appConfigVar),
  setSelectedNavMenu: setSelectedNavMenu(appConfigVar),
};

export default appConfigMutations;
