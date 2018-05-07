// @flow
import { type NavigationAction, type NavigationState } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import AppNavigator, { Route } from "../App";

// $FlowFixMe
export default (state: NavigationState, action: NavigationAction) =>
  AppNavigator.router.getStateForAction(action, state) || state;
