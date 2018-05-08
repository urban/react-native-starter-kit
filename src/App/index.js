// @flow
import * as React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthStack, { AuthLoading } from "./Auth";
import MainStack from "./Main";

export const Route = {
  Loading: "Loading",
  Main: "Main",
  Auth: "Auth"
};

export default createSwitchNavigator(
  {
    [Route.Loading]: AuthLoading,
    [Route.Main]: MainStack,
    [Route.Auth]: AuthStack
  },
  {
    initialRouteName: Route.Loading
  }
);
