// @flow
import { type NavigationState, type NavigationAction } from "react-navigation";

import AppNavigator, { Route } from "../App";

// const initialAction = AppNavigator.router.getActionForPathAndParams(
//   Route.Loading
// );
// // $FlowFixMe
// const initialState: NavigationState = AppNavigator.router.getStateForAction(
//   // $FlowFixMe
//   initialAction
// );

export default (state: NavigationState, action: NavigationAction) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
