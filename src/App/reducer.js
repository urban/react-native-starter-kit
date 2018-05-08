// @flow
import { type NavigationState, type NavigationAction } from "react-navigation";

import { App, Route } from "./";

export const key = "app/navigation";

export default (state: NavigationState, action: NavigationAction) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = App.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
