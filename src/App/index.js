// @flow
import * as React from "react";
import { SwitchNavigator } from "react-navigation";

import AuthStack, { AuthLoading } from "./Auth";
import MainStack from "./Main";

export const Route = {
  Loading: "Loading",
  Main: "Main",
  Auth: "Auth"
};

const AppNavigator = SwitchNavigator(
  {
    [Route.Loading]: AuthLoading,
    [Route.Main]: MainStack,
    [Route.Auth]: AuthStack
  },
  {
    initialRouteName: Route.Loading
  }
);

export default AppNavigator;
