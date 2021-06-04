import { makeVar, ReactiveVar } from "@apollo/client";

export interface AppConfig {
  menu: boolean;
  navMenuSelected: string | null;
}

const intialAppconfig: AppConfig = {
  menu: false,
  navMenuSelected: null,
};

export const appConfigVar: ReactiveVar<AppConfig> = makeVar<AppConfig>(
  intialAppconfig
);
