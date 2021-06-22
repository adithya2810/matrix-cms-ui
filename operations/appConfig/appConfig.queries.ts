import { gql } from "@apollo/client";

export const GET_NAV_MENU_STATE = gql`
  query GetNavMenuState {
    appConfig @client {
      menu
      navMenuSelected
    }
  }
`;
